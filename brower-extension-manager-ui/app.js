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

const pluginGrid = document.querySelector(".plugins__grid");
let list = pluginsList;

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

const filterListItems = document.querySelectorAll(".filter__list__item");

if (filterListItems) {
  filterListItems.forEach((item) => {
    item.addEventListener("click", filterList);
  });
}

function filterByState(state) {
  if (typeof state !== "string") return;

  switch (state) {
    case "all":
      list = pluginsList;
      createGrid();
      break;
    case "active":
      list = pluginsList.filter((item) => item.isActive === true);
      createGrid();
      break;
    case "inactive":
      list = pluginsList.filter((item) => item.isActive === false);
      createGrid();
      break;
    default:
      list = pluginsList;
      createGrid();
      break;
  }
}

function filterList(event) {
  event.preventDefault();

  // remove the active toggle
  filterListItems.forEach((item) => {
    item.classList.remove("active");
  });

  const target = event.currentTarget;
  const value = target.getAttribute("data-value");

  filterByState(value);

  target.classList.add("active");
  console.log({ target, value });
}

function toggleActive(event) {
  event.preventDefault();
  const target = event.currentTarget;
  target.classList.toggle("active");
}

function removePlugin(event) {
  event.preventDefault();
  const element = event.currentTarget;
  const grandparent = element.parentElement.parentElement;
  pluginGrid.removeChild(grandparent);
}

function createFooterSection(isActive, index) {
  const footer = document.createElement("footer");
  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";

  removeButton.addEventListener("click", removePlugin);

  const switchContainer = document.createElement("label");
  switchContainer.className = isActive ? "switch active" : "switch";

  switchContainer.addEventListener("click", toggleActive);

  const checkbox = document.createElement("input");
  checkbox.id = `toggle-${index}`;
  checkbox.type = "radio";
  const slider = document.createElement("span");
  slider.className = `slider round`;

  switchContainer.appendChild(checkbox);
  switchContainer.appendChild(slider);

  footer.appendChild(removeButton);
  footer.append(switchContainer);
  return footer;
}

function createPluginTile(item, index) {
  const { logo, name, description, isActive } = item;
  const element = document.createElement("div");
  element.className = "tile";

  const header = createHeaderSection(logo, name, description);
  const footer = createFooterSection(isActive, index);
  // This is all the element the parent needs to add to it's body
  element.appendChild(header);
  element.appendChild(footer);

  return element;
}

const createGrid = () => {
  pluginGrid.replaceChildren();

  let pluginElement;
  list.forEach((item, index) => {
    pluginElement = createPluginTile(item, index);
    pluginGrid.appendChild(pluginElement);
  });
};

if (pluginGrid) {
  createGrid();
}
