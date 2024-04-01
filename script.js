const projects = [
  {
    title: "Super Cool Project",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce euismod nisl vel eros consectetur tempor a sit amet sem. Integer rhoncus dictum sem. Vestibulum et metus porta dolor molestie volutpat. Curabitur lorem elit, rutrum sed lorem vel, ornare lobortis tellus. Mauris ultricies imperdiet condimentum. Aliquam erat volutpat. ",
  },
  {
    title: "Mildly Cool Project",
    description:
      "Nullam facilisis nec magna et iaculis. Fusce accumsan maximus nulla, quis fringilla magna bibendum sed. Sed ut blandit ex. Ut fringilla erat eget purus vestibulum, sed viverra orci pretium.",
  },
  {
    title: "Project Super Hot",
    description:
      "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vestibulum elementum sem eget eros consectetur semper. Sed sed diam ac nisi porttitor elementum ac quis felis. Sed lorem tellus, efficitur in eros eu, volutpat semper nisl. In commodo arcu eget enim mattis, quis pulvinar diam iaculis. Suspendisse cursus turpis arcu, rhoncus tristique turpis faucibus sed. Proin vitae ligula et ex posuere gravida. Sed fermentum cursus justo sit amet volutpat. Donec in mi viverra, ultricies diam in, mollis tellus. In suscipit magna quam, sit amet sollicitudin justo tincidunt ac.",
  },
  {
    title: "Sunshine Project",
    description:
      "Fusce in enim nunc. Morbi vel enim luctus, convallis diam id, lacinia felis. Donec sit amet quam quis velit mattis finibus. In hac habitasse platea dictumst.",
  },
  {
    title: "Best Project",
    description:
      "Morbi sed scelerisque leo. In pellentesque eget eros eu ullamcorper. Donec pulvinar id metus eget tempus. Ut nec tempor nisl. Ut iaculis a justo ut blandit.",
  },
  {
    title: "Always on HOLD",
    description:
      "Morbi dignissim eros lorem, in elementum dui placerat at. Phasellus pharetra viverra dolor in tempor. Etiam non odio et ex aliquam iaculis. Phasellus eu orci ligula. Nunc efficitur, mi sit amet porta tempus, enim ligula sollicitudin ipsum, nec dignissim nulla quam eget nisi. Nam auctor, ligula ac vestibulum sodales, sem purus malesuada mauris, sit amet condimentum nunc eros ac risus. Pellentesque placerat velit tempor turpis volutpat consequat. Aliquam facilisis purus ut gravida ultrices. Mauris scelerisque tincidunt neque, id feugiat lacus rhoncus nec. Nullam id ex id magna mattis euismod. Aliquam finibus ipsum vitae purus varius, in congue sapien tempor. Maecenas euismod felis id tellus varius, a fringilla augue porttitor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nunc egestas rhoncus massa vestibulum laoreet. Ut facilisis a nulla et bibendum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;",
  },
];

const announcements = [
  {
    title: "Site Maintainence",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    title: "Office Event",
    description: "Vestibulum et metus porta dolor molestie volutpat. ",
  },
  {
    title: "Updated Privacy Policy",
    description: "Mauris ultricies imperdiet condimentum.",
  },
];

const trendings = [
  {
    author: {
      username: "tegan",
      pfp: "./images/pfp/tegan.png",
    },
    project: {
      name: "World Peach Builder",
    },
  },
  {
    author: {
      username: "aarkimos",
      pfp: "./images/pfp/aarkimos.png",
    },
    project: {
      name: "Super Cool Project",
    },
  },
  {
    author: {
      username: "kendall",
      pfp: "./images/pfp/kendall.png",
    },
    project: {
      name: "Life Changing App",
    },
  },
  {
    author: {
      username: "Alex",
      pfp: "./images/pfp/alex.png",
    },
    project: {
      name: "No traffic Maker",
    },
  },
];

function createProjectNode(project) {
  const referenceNode = document.querySelector("#reference-project-card");

  const newProject = referenceNode.cloneNode(true);
  newProject.classList.remove("reference-node");
  newProject.removeAttribute("id");

  newProject.querySelector(".title").innerText = project.title;
  newProject.querySelector(".desc").innerText = project.description;

  return newProject;
}

function createAnnouncementNode(announcement) {
  const referenceNode = document.querySelector("#reference-announcement");

  const newAnnouncement = referenceNode.cloneNode(true);
  newAnnouncement.classList.remove("reference-node");
  newAnnouncement.removeAttribute("id");

  newAnnouncement.querySelector(".title").innerText = announcement.title;
  newAnnouncement.querySelector(".desc").innerText = announcement.description;

  return newAnnouncement;
}

function createTrendingNode(trend) {
  const referenceNode = document.querySelector("#reference-trending");

  const newTrend = referenceNode.cloneNode(true);
  newTrend.classList.remove("reference-node");
  newTrend.removeAttribute("id");

  // newTrend.setAttribute();

  newTrend
    .querySelector(".pfp-small")
    .setAttribute("src", `${trend.author.pfp}`);
  newTrend.querySelector(".title").innerText = "@" + trend.author.username;
  newTrend.querySelector(".desc").innerText = trend.project.name;

  return newTrend;
}

const projectContainer = document.querySelector(".project-container");
const announcementContainer = document.querySelector(".announcement-container");
const trendingContainer = document.querySelector(".trending-container");

projects.forEach((project) => {
  projectContainer.appendChild(createProjectNode(project));
});

announcements.forEach((announcement) => {
  announcementContainer.appendChild(createAnnouncementNode(announcement));
});

trendings.forEach((trend) => {
  trendingContainer.appendChild(createTrendingNode(trend));
});
