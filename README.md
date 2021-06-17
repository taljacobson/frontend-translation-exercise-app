# Install

1. run **npm install**
2. run **npm start**

# Intro

The given application is using the library i18next to support Internationalization.
It is storing all the components strings in a single file for each language under the "/public/locales" folder.

For this simple example app we are supporting en-US only and the only components that support Internationalization are the following:

1. GeneralDetailsSection
2. ResourcesHeader

**Those are the only components that you should implement the solution on. Feel free to change/refactor them if needed**

# The Problem

The current solution is not scalable and doesn’t allow us to completely separate our components from each other in order to support code-splitting in the future.

# Your Exercise

Provide a solution to our problem by allowing each component to define its own strings and lazy load them only when first rendered.

Make sure that:

1. Your solution is **scalable & reusable**.
2. When/If we add a language switch button in the future that the relevant component will re-render and display the newly selected language. 

##### For example

Under the directory "/components/detailsView/ResourcesHeader" we will have a "locales/en-US/strings.json" file that will include the following strings:

```json
{
  "TITLE": "My Resources",
  "SUBTITLE": "Resources List",
}
```

**Note:** Make sure you remove the prefix of the component name from the string keys.
meaning, **RESOURCES_HEADER_TITLE** turns into **TITLE**

# Solution Submission

The code should be placed in an open GitHub repository.
