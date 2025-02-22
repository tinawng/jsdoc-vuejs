/* eslint-disable newline-per-chained-call */

describe("Template: docstrap", () => {
  before(() => {
    cy.visit("/../../../example/docs-docstrap/module-better-components_BetterCounter.html")
    cy.screenshot()
  })

  it("should renders module name correctly", () => {
    cy.get(".page-title").contains("Module: better-components/BetterCounter")

    cy.get('.nav .dropdown a[href="module-better-components_BetterCounter.html"]').contains(
      "better-components/BetterCounter"
    )
  })

  it("should renders @desc properly", () => {
    cy.get(".container-overview").contains("BetterCounter component, like Counter component but better")
  })

  it("should renders props correctly", () => {
    const props = [
      {
        name: "<code>initialCounter</code>",
        type: "Number",
        defaultValue: "-",
        required: "<b>Yes</b>",
        description: "-",
      },
      {
        name: "<code>step</code>",
        type: "Number",
        defaultValue: "<code>1</code>",
        required: "No",
        description: "Step",
      },
    ]

    cy.get('[data-jsdoc-vuejs="section-props"]').contains("Props").should("have.class", "subsection-title")
    cy.get('[data-jsdoc-vuejs="table-props"]')
      .as("table-props")
      .should("have.class", "table table-responsive table-hover table-striped")

    cy.get("@table-props")
      .find("> thead > tr > th")
      .contains("Name")
      .next()
      .contains("Type")
      .next()
      .contains("Default value")
      .next()
      .contains("Required?")
      .next()
      .contains("Description")

    cy.get("@table-props")
      .find("> tbody > tr")
      .then($rows => {
        expect($rows).to.have.length(2)

        props.forEach((prop, i) => {
          const $row = $rows.eq(i)
          const $children = $row.children()

          expect($children.eq(0).html()).to.eq(prop.name)
          expect($children.eq(1).html()).to.eq(prop.type)
          expect($children.eq(2).html()).to.eq(prop.defaultValue)
          expect($children.eq(3).html()).to.eq(prop.required)
          expect($children.eq(4).html()).to.eq(prop.description)
        })
      })
  })

  it("should renders data correctly", () => {
    const data = [
      {
        name: "<code>counter</code>",
        type: "Number",
        defaultValue: "-",
        description: "Current counter's value",
      },
    ]

    cy.get('[data-jsdoc-vuejs="section-data"]').contains("Data").should("have.class", "subsection-title")
    cy.get('[data-jsdoc-vuejs="table-data"]')
      .as("table-data")
      .should("have.class", "table table-responsive table-hover table-striped")

    cy.get("@table-data")
      .find("> thead > tr > th")
      .contains("Name")
      .next()
      .contains("Type")
      .next()
      .contains("Default value")
      .next()
      .contains("Description")

    cy.get("@table-data")
      .find("> tbody > tr")
      .then($rows => {
        expect($rows).to.have.length(1)

        data.forEach((d, i) => {
          const $row = $rows.eq(i)
          const $children = $row.children()

          expect($children.eq(0).html()).to.eq(d.name)
          expect($children.eq(1).html()).to.eq(d.type)
          expect($children.eq(2).html()).to.eq(d.defaultValue)
          expect($children.eq(3).html()).to.eq(d.description)
        })
      })
  })

  it("should renders computed correctly", () => {
    const computeds = [
      { name: "<code>fooList</code>", type: "Array.&lt;String&gt;", description: "A list of foo" },
      { name: "<code>barList</code>", type: "Array.&lt;String&gt;", description: "A list of bar" },
      { name: "<code>message</code>", type: "String", description: "A message" },
    ]

    cy.get('[data-jsdoc-vuejs="section-computed"]').contains("Computed").should("have.class", "subsection-title")
    cy.get('[data-jsdoc-vuejs="table-computed"]')
      .as("table-computed")
      .should("have.class", "table table-responsive table-hover table-striped")

    cy.get("@table-computed")
      .find("> thead > tr > th")
      .contains("Name")
      .next()
      .contains("Type")
      .next()
      .contains("Description")

    cy.get("@table-computed")
      .find("> tbody > tr")
      .then($rows => {
        expect($rows).to.have.length(3)

        computeds.forEach((computed, i) => {
          const $row = $rows.eq(i)
          const $children = $row.children()

          expect($children.eq(0).html()).to.eq(computed.name)
          expect($children.eq(1).html()).to.eq(computed.type)
          expect($children.eq(2).html()).to.eq(computed.description)
        })
      })
  })

  it("should renders event correctly", () => {
    const events = [
      { name: "<code>increment</code>", type: "Number", description: "Emit counter's value after increment" },
      { name: "<code>decrement</code>", type: "Number", description: "Emit counter's value after decrement" },
    ]

    cy.get('[data-jsdoc-vuejs="section-event"]').contains("Events")
    cy.get('[data-jsdoc-vuejs="table-event"]').as("table-event")

    cy.get("@table-event")
      .find("> thead > tr > th")
      .contains("Name")
      .next()
      .contains("Payload Type")
      .next()
      .contains("Description")

    cy.get("@table-event")
      .find("> tbody > tr")
      .then($rows => {
        expect($rows).to.have.length(2)

        events.forEach((event, i) => {
          const $row = $rows.eq(i)
          const $children = $row.children()

          expect($children.eq(0).html()).to.eq(event.name)
          expect($children.eq(1).html()).to.eq(event.type)
          expect($children.eq(2).html()).to.eq(event.description)
        })
      })
  })

  it("should render methods properly", () => {
    cy.contains("h3", "Methods").should("have.attr", "class", "subsection-title")
    cy.get("#decrement")
      .contains("decrement()")
      .parent()
      .next("dd")
      .find(".details")
      .contains('a[href="better-components_BetterCounter.vue.html#sunlight-1-line-56"]', "line 56")

    cy.get("#increment")
      .contains("increment()")
      .parent()
      .next("dd")
      .find(".details")
      .contains('a[href="better-components_BetterCounter.vue.html#sunlight-1-line-48"]', "line 48")

    cy.get("#showDialog")
      .contains("showDialog(counter)")
      .parent()
      .next("dd")
      .find(".details")
      .contains('a[href="better-components_BetterCounter.vue.html#sunlight-1-line-65"]', "line 65")

    cy.contains("created()").should("not.exist")
  })
})

describe("Template JS: docstrap", () => {
  before(() => {
    cy.visit("/../../../example/docs-docstrap/module-CounterJS.html")
    cy.screenshot()
  })

  it("should renders module name correctly", () => {
    cy.get(".page-title").contains("Module: CounterJS")

    cy.get('.nav .dropdown a[href="module-CounterJS.html"]').contains("CounterJS")
  })

  it("should renders props correctly", () => {
    const props = [
      {
        name: "<code>initialCounter</code>",
        type: "Number",
        defaultValue: "-",
        required: "<b>Yes</b>",
        description: "-",
      },
      {
        name: "<code>step</code>",
        type: "Number",
        defaultValue: "<code>1</code>",
        required: "No",
        description: "Step",
      },
    ]

    cy.get('[data-jsdoc-vuejs="section-props"]').contains("Props").should("have.class", "subsection-title")
    cy.get('[data-jsdoc-vuejs="table-props"]')
      .as("table-props")
      .should("have.class", "table table-responsive table-hover table-striped")

    cy.get("@table-props")
      .find("> thead > tr > th")
      .contains("Name")
      .next()
      .contains("Type")
      .next()
      .contains("Default value")
      .next()
      .contains("Required?")
      .next()
      .contains("Description")

    cy.get("@table-props")
      .find("> tbody > tr")
      .then($rows => {
        expect($rows).to.have.length(2)

        props.forEach((prop, i) => {
          const $row = $rows.eq(i)
          const $children = $row.children()

          expect($children.eq(0).html()).to.eq(prop.name)
          expect($children.eq(1).html()).to.eq(prop.type)
          expect($children.eq(2).html()).to.eq(prop.defaultValue)
          expect($children.eq(3).html()).to.eq(prop.required)
          expect($children.eq(4).html()).to.eq(prop.description)
        })
      })
  })

  it("should renders data correctly", () => {
    const data = [
      {
        name: "<code>counter</code>",
        type: "Number",
        defaultValue: "-",
        description: "Current counter's value",
      },
    ]

    cy.get('[data-jsdoc-vuejs="section-data"]').contains("Data").should("have.class", "subsection-title")
    cy.get('[data-jsdoc-vuejs="table-data"]')
      .as("table-data")
      .should("have.class", "table table-responsive table-hover table-striped")

    cy.get("@table-data")
      .find("> thead > tr > th")
      .contains("Name")
      .next()
      .contains("Type")
      .next()
      .contains("Default value")
      .next()
      .contains("Description")

    cy.get("@table-data")
      .find("> tbody > tr")
      .then($rows => {
        expect($rows).to.have.length(1)

        data.forEach((d, i) => {
          const $row = $rows.eq(i)
          const $children = $row.children()

          expect($children.eq(0).html()).to.eq(d.name)
          expect($children.eq(1).html()).to.eq(d.type)
          expect($children.eq(2).html()).to.eq(d.defaultValue)
          expect($children.eq(3).html()).to.eq(d.description)
        })
      })
  })

  it("should renders computed correctly", () => {
    const computeds = [
      { name: "<code>fooList</code>", type: "Array.&lt;String&gt;", description: "A list of foo" },
      { name: "<code>barList</code>", type: "Array.&lt;String&gt;", description: "A list of bar" },
      { name: "<code>message</code>", type: "String", description: "A message" },
    ]

    cy.get('[data-jsdoc-vuejs="section-computed"]').contains("Computed").should("have.class", "subsection-title")
    cy.get('[data-jsdoc-vuejs="table-computed"]')
      .as("table-computed")
      .should("have.class", "table table-responsive table-hover table-striped")

    cy.get("@table-computed")
      .find("> thead > tr > th")
      .contains("Name")
      .next()
      .contains("Type")
      .next()
      .contains("Description")

    cy.get("@table-computed")
      .find("> tbody > tr")
      .then($rows => {
        expect($rows).to.have.length(3)

        computeds.forEach((computed, i) => {
          const $row = $rows.eq(i)
          const $children = $row.children()

          expect($children.eq(0).html()).to.eq(computed.name)
          expect($children.eq(1).html()).to.eq(computed.type)
          expect($children.eq(2).html()).to.eq(computed.description)
        })
      })
  })

  it("should render methods properly", () => {
    cy.contains("h3", "Methods").should("have.attr", "class", "subsection-title")
    cy.get("#decrement")
      .contains("decrement()")
      .parent()
      .next("dd")
      .find(".details")
      .contains('a[href="js_CounterJS.js.html#sunlight-1-line-43"]', "line 43")

    cy.get("#increment")
      .contains("increment()")
      .parent()
      .next("dd")
      .find(".details")
      .contains('a[href="js_CounterJS.js.html#sunlight-1-line-36"]', "line 36")

    cy.get("#showDialog")
      .contains("showDialog(counter)")
      .parent()
      .next("dd")
      .find(".details")
      .contains('a[href="js_CounterJS.js.html#sunlight-1-line-51"]', "line 51")

    cy.contains("created()").should("not.exist")
  })
})

describe("JS files rendered or not as Vue Component", () => {
  before(() => {
    cy.visit("/../../../example/docs-docstrap/index.html")
    cy.screenshot()
  })

  it("NotVueComponent should not be rendered as Vue component", () => {
    cy.get('.nav .dropdown a[href="global.html#helloWorld"]').contains("helloWorld")
    cy.get('.nav .dropdown a[href="module-NotVueComponent.html"]').should("not.exist")
  })

  it("NotVueComponent2 should not be rendered as Vue component", () => {
    cy.visit("/../../../example/docs-docstrap/module-NotVueComponent2.html")

    cy.get('.nav .dropdown a[href="module-NotVueComponent2.html"]').contains("NotVueComponent2")

    cy.contains("h3", "Methods")
      .should("have.attr", "class", "subsection-title")
      .next("dl")
      .find("h4")
      .contains("theMethod")
      .parent()
      .next("dd")
      .find(".details")
      .contains('a[href="js_NotVueComponent2.js.html#sunlight-1-line-11"]', "line 11")
  })
})
