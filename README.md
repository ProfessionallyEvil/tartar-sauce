# tartar-sauce
## About
Miscellaneous demos and scripts for user awareness campaigns. These are odds and ends assembled based on some common asks from phishing campaigns of the past. 
More detail about usage and extending the payloads is in the blog: *url tbd*

**Note: These materials are for demonstrations and user awareness exercises conducted with the target organization's permission. Don't use them for evil.**

## Inventory
### attachment/
  - *bootstrap_template.xlsm*: An excel workbook with VBA in place for a few relatively benign payloads, such as writing a text file and opening it in notepad. Configuration is on the `.config` sheet, which can be hidden once configured. Any other sheets added and populated to support an appropriate ruse. Note that in most cases today, the user will need to explicitly enable macros.

### web/
 - *showgo.js*: A tiny JavaScript library for masking where links are pointed. Show one URL on hover and go to another, using the `data-go-url` attribute, for example:
  ```html
  <a href="https://trustworthysite.test" data-go-url="https://realdestination.test">Text to click</a>
  ```
