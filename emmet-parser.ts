import { htmlEmmetData, cssEmmetData, jsEmmetData } from "./emmet-data"

export class EmmetParser {
  private static expandTabStops(text: string, startIndex = 1): string {
    let result = text
    const tabStopIndex = startIndex

    // Replace numbered tab stops with placeholders
    result = result.replace(/\$(\d+)/g, (match, num) => {
      return `\${${num}:}`
    })

    // If no numbered tab stops, add a default one at the end
    if (!result.includes("${")) {
      result += "${1:}"
    }

    return result
  }

  private static parseMultiplier(abbr: string): { base: string; count: number } {
    const multiplierMatch = abbr.match(/^(.+?)\*(\d+)$/)
    if (multiplierMatch) {
      return {
        base: multiplierMatch[1],
        count: Number.parseInt(multiplierMatch[2]),
      }
    }
    return { base: abbr, count: 1 }
  }

  private static parseNesting(abbr: string): string[] {
    // Handle simple nesting like ul>li*3
    if (abbr.includes(">")) {
      return abbr.split(">")
    }
    return [abbr]
  }

  private static parseAttributes(tag: string): { tag: string; attributes: string } {
    let cleanTag = tag
    let attributes = ""

    // Parse class (.class)
    const classMatch = tag.match(/\.([a-zA-Z0-9_-]+)/g)
    if (classMatch) {
      const classes = classMatch.map((c) => c.substring(1)).join(" ")
      attributes += ` class="${classes}"`
      cleanTag = cleanTag.replace(/\.[a-zA-Z0-9_-]+/g, "")
    }

    // Parse ID (#id)
    const idMatch = tag.match(/#([a-zA-Z0-9_-]+)/)
    if (idMatch) {
      attributes += ` id="${idMatch[1]}"`
      cleanTag = cleanTag.replace(/#[a-zA-Z0-9_-]+/, "")
    }

    // Parse attributes ([attr=value])
    const attrMatch = tag.match(/\[([^\]]+)\]/g)
    if (attrMatch) {
      attrMatch.forEach((attr) => {
        const attrContent = attr.slice(1, -1)
        if (attrContent.includes("=")) {
          const [key, value] = attrContent.split("=")
          attributes += ` ${key}="${value}"`
        } else {
          attributes += ` ${attrContent}`
        }
      })
      cleanTag = cleanTag.replace(/\[[^\]]+\]/g, "")
    }

    return { tag: cleanTag, attributes }
  }

  static expandHTML(abbreviation: string): string {
    // Handle HTML5 boilerplate
    if (abbreviation === "!") {
      return htmlEmmetData["!"]
    }

    // Handle direct tag expansions first
    if (htmlEmmetData.tags[abbreviation]) {
      return this.expandTabStops(htmlEmmetData.tags[abbreviation])
    }

    if (htmlEmmetData.inputTypes[abbreviation]) {
      return this.expandTabStops(htmlEmmetData.inputTypes[abbreviation])
    }

    if (htmlEmmetData.buttonTypes[abbreviation]) {
      return this.expandTabStops(htmlEmmetData.buttonTypes[abbreviation])
    }

    if (htmlEmmetData.structures[abbreviation]) {
      return this.expandTabStops(htmlEmmetData.structures[abbreviation])
    }

    // Handle complex abbreviations
    const parts = this.parseNesting(abbreviation)
    let result = ""
    let indent = ""

    for (let i = 0; i < parts.length; i++) {
      const part = parts[i].trim()
      const { base, count } = this.parseMultiplier(part)
      const { tag, attributes } = this.parseAttributes(base)

      // Check if it's a known tag
      if (htmlEmmetData.tags[tag]) {
        let template = htmlEmmetData.tags[tag]

        // Add attributes if any
        if (attributes) {
          template = template.replace(/^<(\w+)/, `<$1${attributes}`)
        }

        // Handle multiplication
        if (count > 1) {
          const items = []
          for (let j = 1; j <= count; j++) {
            const item = template.replace(/\$\{1\}/g, `\${${j}:}`)
            items.push(indent + item)
          }
          result += items.join("\n")
        } else {
          result += indent + this.expandTabStops(template)
        }

        // Increase indent for nested elements
        if (i < parts.length - 1) {
          result += "\n"
          indent += "\t"
        }
      } else {
        // Create a generic tag
        const openTag = `<${tag}${attributes}>`
        const closeTag = `</${tag}>`

        if (count > 1) {
          const items = []
          for (let j = 1; j <= count; j++) {
            items.push(`${indent}${openTag}\${${j}:}${closeTag}`)
          }
          result += items.join("\n")
        } else {
          result += `${indent}${openTag}\${1:}${closeTag}`
        }

        if (i < parts.length - 1) {
          result += "\n"
          indent += "\t"
        }
      }
    }

    return result
  }

  static expandCSS(abbreviation: string): string {
    // Direct property match
    if (cssEmmetData[abbreviation]) {
      return this.expandTabStops(cssEmmetData[abbreviation])
    }

    // Handle property with value (e.g., w100 -> width: 100px;)
    const valueMatch = abbreviation.match(/^([a-z]+)(\d+)([a-z%]*)?$/)
    if (valueMatch) {
      const [, prop, value, unit] = valueMatch
      if (cssEmmetData[prop]) {
        const property = cssEmmetData[prop].replace("$1", `${value}${unit || "px"}`)
        return property
      }
    }

    // Handle color values (e.g., c#fff -> color: #fff;)
    const colorMatch = abbreviation.match(/^([a-z]+)#([0-9a-fA-F]{3,6})$/)
    if (colorMatch) {
      const [, prop, color] = colorMatch
      if (cssEmmetData[prop]) {
        const property = cssEmmetData[prop].replace("$1", `#${color}`)
        return property
      }
    }

    // Handle percentage values (e.g., w50p -> width: 50%;)
    const percentMatch = abbreviation.match(/^([a-z]+)(\d+)p$/)
    if (percentMatch) {
      const [, prop, value] = percentMatch
      if (cssEmmetData[prop]) {
        const property = cssEmmetData[prop].replace("$1", `${value}%`)
        return property
      }
    }

    // Handle negative values (e.g., m-10 -> margin: -10px;)
    const negativeMatch = abbreviation.match(/^([a-z]+)-(\d+)([a-z%]*)?$/)
    if (negativeMatch) {
      const [, prop, value, unit] = negativeMatch
      if (cssEmmetData[prop]) {
        const property = cssEmmetData[prop].replace("$1", `-${value}${unit || "px"}`)
        return property
      }
    }

    return this.expandTabStops(`${abbreviation}: \${1:};`)
  }

  static expandJS(abbreviation: string): string {
    if (jsEmmetData[abbreviation]) {
      return this.expandTabStops(jsEmmetData[abbreviation])
    }

    // Handle method calls with parameters (e.g., cl -> console.log())
    const methodMatch = abbreviation.match(/^([a-z]+)(\d*)$/)
    if (methodMatch) {
      const [, method, num] = methodMatch
      if (jsEmmetData[method]) {
        let expansion = jsEmmetData[method]
        if (num) {
          // Replace numbered placeholders
          expansion = expansion.replace(/\$1/g, `\${1:param${num}}`)
        }
        return this.expandTabStops(expansion)
      }
    }

    return this.expandTabStops(`${abbreviation}(\${1:});`)
  }

  static expand(abbreviation: string, language: string): string {
    switch (language) {
      case "html":
        return this.expandHTML(abbreviation)
      case "css":
        return this.expandCSS(abbreviation)
      case "javascript":
        return this.expandJS(abbreviation)
      default:
        return abbreviation
    }
  }
}
