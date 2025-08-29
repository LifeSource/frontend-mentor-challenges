const pluginsList = [
  {
    logo: "./assets/images/logo-devlens.svg",
    name: "DevLens",
    description:
      "Quickly inspect page layouts and visualize element boundaries.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-style-spy.svg",
    name: "StyleSpy",
    description: "Instantly analyze and copy CSS from any webpage element.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-speed-boost.svg",
    name: "SpeedBoost",
    description: "Optimizes browser resource usage to accelerate page loading.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-json-wizard.svg",
    name: "JSONWizard",
    description:
      "Formats, validates, and prettifies JSON responses in-browser.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-tab-master-pro.svg",
    name: "TabMaster Pro",
    description: "Organizes browser tabs into groups and sessions.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-viewport-buddy.svg",
    name: "ViewportBuddy",
    description:
      "Simulates various screen resolutions directly within the browser.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-markup-notes.svg",
    name: "Markup Notes",
    description:
      "Enables annotation and notes directly onto webpages for collaborative debugging.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-grid-guides.svg",
    name: "GridGuides",
    description:
      "Overlay customizable grids and alignment guides on any webpage.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-palette-picker.svg",
    name: "Palette Picker",
    description: "Instantly extracts color palettes from any webpage.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-link-checker.svg",
    name: "LinkChecker",
    description: "Scans and highlights broken links on any page.",
    isActive: true,
  },
  {
    logo: "./assets/images/logo-dom-snapshot.svg",
    name: "DOM Snapshot",
    description: "Capture and export DOM structures quickly.",
    isActive: false,
  },
  {
    logo: "./assets/images/logo-console-plus.svg",
    name: "ConsolePlus",
    description:
      "Enhanced developer console with advanced filtering and logging.",
    isActive: true,
  },
];

function createHeaderSection(logo, name, description) {
  const header = document.createElement("header");
  const icon = document.createElement("img");
  icon.className = "icon";
  icon.src = logo;

  // This is the container to hold the heading and description
  const content = document.createElement("section");
  const heading = document.createElement("h3");
  heading.textContent = name;
  const info = document.createElement("p");
  info.textContent = description;

  content.appendChild(heading);
  content.appendChild(info);

  // The header section contains the icon + content
  header.appendChild(icon);
  header.appendChild(content);
  header.appendChild(content);

  return header;
}

function createFooterSection() {
  const footer = document.createElement("footer");
  const removeButton = document.createElement("button");
  removeButton.textContent = "remove";
  footer.appendChild(removeButton);

  const switchContainer = document.createElement("label");
  switchContainer.className = "switch";
  const checkbox = document.createElement("input");
  checkbox.type = "radio";
  const slider = document.createElement("span");
  slider.className = "slider round";
  switchContainer.appendChild(checkbox);
  switchContainer.appendChild(slider);
  return footer;
}

function createPluginTile(item) {
  const { logo, name, description, isActive } = item;
  const element = document.createElement("div");
  element.className = "tile";

  const header = createHeaderSection(logo, name, description);
  const footer = createFooterSection();
  // This is all the element the parent needs to add to it's body
  element.appendChild(header);
  element.appendChild(footer);

  console.log("ELEMENT ", element);
  return element;
}

const pluginGrid = document.querySelector(".plugins__grid");

if (pluginGrid) {
  let pluginElement;

  pluginsList.forEach((item) => {
    pluginElement = createPluginTile(item);
    pluginGrid.appendChild(pluginElement);
  });
}
