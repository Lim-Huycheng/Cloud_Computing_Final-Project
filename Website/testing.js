"use strict";

const services = [
    {
    name: "Amazon EC2 (Elastic Compute Cloud)",
    badge: "Free Tier",
    badgeClass: "free",
    cost: "750 hours/month t2.micro or t3.micro",
    tierDetail: "12 months Free Tier, charges after limit",
    description: "Virtual servers to run applications in the cloud.",
    strategy: "Use micro instance types within free tier limits to avoid charges.",
    category: "Compute",
    link: "https://aws.amazon.com/ec2/",
    image: "https://chornay-bucket-for-cloud-project.s3.us-east-1.amazonaws.com/448303799_916932447111287_8037995360757338166_n.jpg"
    },
    {
    name: "Amazon S3 (Simple Storage Service)",
    badge: "Always Free",
    badgeClass: "always",
    cost: "5 GB standard storage",
    tierDetail: "Always Free",
    description: "Scalable object storage service.",
    strategy: "Store backups and static content using free tier limits.",
    category: "Storage",
    link: "https://aws.amazon.com/s3/",
    image: "https://chornay-bucket-for-cloud-project.s3.us-east-1.amazonaws.com/448353594_916932043777994_708975337486974907_n.jpg"
    },
    {
    name: "Elastic Load Balancer (ALB)",
    badge: "Paid Plan",
    badgeClass: "paid",
    cost: "Pay per hour + GB processed",
    tierDetail: "Paid Plan (charges immediately)",
    description: "Automatically distributes incoming traffic across targets like EC2.",
    strategy: "Use with Auto Scaling to build resilient apps; control costs with monitoring.",
    category: "Networking & Content Delivery",
    link: "https://aws.amazon.com/elasticloadbalancing/",
    pricePerUnit: 0.025,  // example price per hour
    unit: "hour"
    },
    {
    name: "AWS IAM (Identity and Access Management)",
    badge: "Always Free",
    badgeClass: "always",
    cost: "No additional charge",
    tierDetail: "Always Free",
    description: "Manage users, groups, roles, and permissions securely.",
    strategy: "Follow least-privilege principle to secure AWS resources.",
    category: "Security & Identity",
    link: "https://aws.amazon.com/iam/",
    pricePerUnit: 0,
    unit: "unit"
    },
    {
    name: "Amazon RDS (Relational Database Service)",
    badge: "Free Tier",
    badgeClass: "free",
    cost: "750 hours/month db.t2.micro or db.t3.micro",
    tierDetail: "12 months Free Tier, charges after limit",
    description: "Managed relational database service.",
    strategy: "Use free tier eligible engines and instance sizes.",
    category: "Database",
    link: "https://aws.amazon.com/rds/"
    },
    {
    name: "AWS Lambda",
    badge: "Always Free",
    badgeClass: "always",
    cost: "1M requests/month, 400,000 GB-seconds compute",
    tierDetail: "Always Free",
    description: "Run code without provisioning servers.",
    strategy: "Use serverless compute to reduce costs and scale automatically.",
    category: "Compute",
    link: "https://aws.amazon.com/lambda/"
    },
    {
    name: "Amazon CloudFront",
    badge: "Free Tier",
    badgeClass: "free",
    cost: "50 GB data transfer out, 2M HTTP/HTTPS requests",
    tierDetail: "12 months Free Tier, charges after limit",
    description: "Content delivery network service.",
    strategy: "Accelerate delivery and reduce latency with free tier usage.",
    category: "Networking & Content Delivery",
    link: "https://aws.amazon.com/cloudfront/"
    },
    {
    name: "Amazon DynamoDB",
    badge: "Always Free",
    badgeClass: "always",
    cost: "25 GB storage, 25 write capacity units, 25 read capacity units",
    tierDetail: "Always Free",
    description: "Managed NoSQL database service.",
    strategy: "Use provisioned throughput within free limits for small workloads.",
    category: "Database",
    link: "https://aws.amazon.com/dynamodb/"
    },
    {
    name: "Amazon SNS (Simple Notification Service)",
    badge: "Free Tier",
    badgeClass: "free",
    cost: "1M publishes/month, 100,000 HTTP/HTTPS notifications",
    tierDetail: "12 months Free Tier, charges after limit",
    description: "Simple notification service for pub/sub messaging.",
    strategy: "Use for alerts and notifications within free tier limits.",
    category: "Application Integration",
    link: "https://aws.amazon.com/sns/"
    },
    {
    name: "Amazon SQS (Simple Queue Service)",
    badge: "Free Tier",
    badgeClass: "free",
    cost: "1M requests/month",
    tierDetail: "12 months Free Tier, charges after limit",
    description: "Fully managed message queuing service.",
    strategy: "Use for decoupling components and buffering messages.",
    category: "Application Integration",
    link: "https://aws.amazon.com/sqs/"
    },
    {
    name: "Amazon Elastic Beanstalk",
    badge: "Always Free",
    badgeClass: "always",
    cost: "No additional charge, pay for underlying resources",
    tierDetail: "Always Free",
    description: "Platform as a service to deploy and manage apps.",
    strategy: "Use free tier eligible resources to minimize costs.",
    category: "Compute",
    link: "https://aws.amazon.com/elasticbeanstalk/"
    },
    {
    name: "Amazon EBS (Elastic Block Store)",
    badge: "Free Tier",
    badgeClass: "free",
    cost: "30 GB general purpose SSD (gp2) storage",
    tierDetail: "12 months Free Tier, charges after limit",
    description: "Block storage volumes for use with EC2.",
    strategy: "Use free tier storage to avoid extra charges.",
    category: "Storage",
    link: "https://aws.amazon.com/ebs/"
    },
    {
    name: "Amazon Elasticsearch Service (OpenSearch Service)",
    badge: "Paid Plan",
    badgeClass: "paid",
    cost: "Not free beyond trial",
    tierDetail: "Paid Plan (charges immediately after trial)",
    description: "Search and analytics engine.",
    strategy: "Use managed service with caution to control costs.",
    category: "Analytics",
    link: "https://aws.amazon.com/opensearch-service/"
    },
    {
    name: "AWS CloudFormation",
    badge: "Always Free",
    badgeClass: "always",
    cost: "No additional charge",
    tierDetail: "Always Free",
    description: "Infrastructure as Code (IaC) service.",
    strategy: "Automate resource provisioning efficiently.",
    category: "Management & Governance",
    link: "https://aws.amazon.com/cloudformation/"
    },
    {
    name: "AWS Glue",
    badge: "Paid Plan",
    badgeClass: "paid",
    cost: "Pay as you go after free trial",
    tierDetail: "Paid Plan (charges after free trial)",
    description: "Serverless data integration service.",
    strategy: "Use for ETL workloads, monitor job run time carefully.",
    category: "Analytics",
    link: "https://aws.amazon.com/glue/"
    },
    {
    name: "Amazon Aurora",
    badge: "Paid Plan",
    badgeClass: "paid",
    cost: "Not free beyond trial",
    tierDetail: "Paid Plan (charges immediately after trial)",
    description: "High-performance relational database.",
    strategy: "Good for high availability and scalability, watch costs.",
    category: "Database",
    link: "https://aws.amazon.com/rds/aurora/"
    },
    {
    name: "AWS CodeBuild",
    badge: "Free Tier",
    badgeClass: "free",
    cost: "100 build minutes/month",
    tierDetail: "12 months Free Tier",
    description: "Fully managed build service.",
    strategy: "Keep builds minimal to stay within free tier.",
    category: "Developer Tools",
    link: "https://aws.amazon.com/codebuild/",
    pricePerUnit: 0.005, 
    unit: "minute"
    },
    {
    name: "AWS CloudWatch",
    badge: "Always Free",
    badgeClass: "always",
    cost: "10 custom metrics, 5GB logs ingestion",
    tierDetail: "Always Free",
    description: "Monitoring and observability service.",
    strategy: "Use free custom metrics and logs wisely.",
    category: "Monitoring & Management",
    link: "https://aws.amazon.com/cloudwatch/",
    pricePerUnit: 0.30,
    unit: "GB"
    },
    {
    name: "AWS Step Functions",
    badge: "Free Tier",
    badgeClass: "free",
    cost: "4,000 state transitions/month",
    tierDetail: "12 months Free Tier",
    description: "Serverless orchestration service.",
    strategy: "Optimize workflows to stay under free limit.",
    category: "Application Integration",
    link: "https://aws.amazon.com/step-functions/",
    pricePerUnit: 0.000025,
    unit: "transition"
    },
    {
    name: "AWS Secrets Manager",
    badge: "Paid Plan",
    badgeClass: "paid",
    cost: "$0.40 per secret per month",
    tierDetail: "Paid Plan",
    description: "Securely store and manage secrets.",
    strategy: "Rotate secrets to improve security, budget carefully.",
    category: "Security, Identity & Compliance",
    link: "https://aws.amazon.com/secrets-manager/",
    pricePerUnit: 0.40,
    unit: "secret"
    },
    {
    name: "AWS AppSync",
    badge: "Free Tier",
    badgeClass: "free",
    cost: "250,000 queries/month",
    tierDetail: "12 months Free Tier",
    description: "Serverless GraphQL API service.",
    strategy: "Optimize queries to stay in free tier.",
    category: "API & App Integration",
    link: "https://aws.amazon.com/appsync/",
    pricePerUnit: 0.000004,
    unit: "query"
    },
    {
    name: "AWS Kinesis Data Streams",
    badge: "Paid Plan",
    badgeClass: "paid",
    cost: "Charges per shard hour and PUT payload unit",
    tierDetail: "Paid Plan",
    description: "Real-time streaming data service.",
    strategy: "Minimize shards and PUT payloads to reduce cost.",
    category: "Analytics",
    link: "https://aws.amazon.com/kinesis/data-streams/",
    pricePerUnit: 0.015,
    unit: "shard-hour"
    },
    {
    name: "AWS Transfer Family",
    badge: "Paid Plan",
    badgeClass: "paid",
    cost: "Charges per hour and data transfer",
    tierDetail: "Paid Plan",
    description: "Managed SFTP, FTPS, and FTP service.",
    strategy: "Control usage hours and transfer volumes.",
    category: "Migration & Transfer",
    link: "https://aws.amazon.com/aws-transfer-family/",
    pricePerUnit: 0.30,
    unit: "hour"
    },
    {
    name: "AWS WAF (Web Application Firewall)",
    badge: "Paid Plan",
    badgeClass: "paid",
    cost: "Charges per rule and request",
    tierDetail: "Paid Plan",
    description: "Web application firewall.",
    strategy: "Limit rules and requests to control cost.",
    category: "Security, Identity & Compliance",
    link: "https://aws.amazon.com/waf/",
    pricePerUnit: 0.60,
    unit: "rule"
    },
    {
    name: "AWS Route 53",
    badge: "Paid Plan",
    badgeClass: "paid",
    cost: "$0.50 per hosted zone/month",
    tierDetail: "Paid Plan",
    description: "Scalable DNS and domain service.",
    strategy: "Combine records in a single hosted zone.",
    category: "Networking & Content Delivery",
    link: "https://aws.amazon.com/route53/",
    pricePerUnit: 0.50,
    unit: "zone"
    },
    {
    name: "AWS Backup",
    badge: "Paid Plan",
    badgeClass: "paid",
    cost: "Charges per GB stored",
    tierDetail: "Paid Plan",
    description: "Centralized backup service.",
    strategy: "Use lifecycle policies to optimize costs.",
    category: "Storage",
    link: "https://aws.amazon.com/backup/",
    pricePerUnit: 0.05,
    unit: "GB"
    }

];

// Price metadata adjustment for some services
services.forEach(s => {
  switch (s.name) {
    case "Amazon EC2 (Elastic Compute Cloud)":
      s.pricePerUnit = 0.0116;
      s.unit = "hour";
      break;
    case "Amazon S3 (Simple Storage Service)":
      s.pricePerUnit = 0.023;
      s.unit = "GB";
      break;
    case "AWS IAM (Identity and Access Management)":
      s.pricePerUnit = 0;
      s.unit = "unit";
      break;
    case "Amazon RDS (Relational Database Service)":
      s.pricePerUnit = 0.018;
      s.unit = "hour";
      break;
    case "AWS Lambda":
      s.pricePerUnit = 0.0000002;
      s.unit = "request";
      break;
    case "Amazon CloudFront":
      s.pricePerUnit = 0.085;
      s.unit = "GB";
      break;
    case "Amazon DynamoDB":
      s.pricePerUnit = 1.25;
      s.unit = "WCU/RCU";
      break;
    case "Amazon SNS (Simple Notification Service)":
      s.pricePerUnit = 0.0000005;
      s.unit = "publish";
      break;
    case "Amazon SQS (Simple Queue Service)":
      s.pricePerUnit = 0.0000004;
      s.unit = "request";
      break;
    case "Amazon EBS (Elastic Block Store)":
      s.pricePerUnit = 0.08;
      s.unit = "GB";
      break;
    case "Amazon Elasticsearch Service (OpenSearch Service)":
      s.pricePerUnit = 0.112;
      s.unit = "hour";
      break;
    case "AWS Glue":
      s.pricePerUnit = 0.44;
      s.unit = "DPU-hour";
      break;
    case "Amazon Aurora":
      s.pricePerUnit = 0.10;
      s.unit = "hour";
      break;
    case "AWS CloudFormation":
    case "Amazon Elastic Beanstalk":
      s.pricePerUnit = 0;
      s.unit = "unit";
      break;
    case "AWS CodeBuild":
      s.pricePerUnit = 0.005;
      s.unit = "minute";
      break;
    case "AWS CloudWatch":
      s.pricePerUnit = 0.30;
      s.unit = "GB";
      break;
    case "AWS Step Functions":
      s.pricePerUnit = 0.000025;
      s.unit = "transition";
      break;
    case "AWS Secrets Manager":
      s.pricePerUnit = 0.40;
      s.unit = "secret";
      break;
    case "AWS AppSync":
      s.pricePerUnit = 0.000004;
      s.unit = "query";
      break;
    case "AWS Kinesis Data Streams":
      s.pricePerUnit = 0.015;
      s.unit = "shard-hour";
      break;
    case "AWS Transfer Family":
      s.pricePerUnit = 0.30;
      s.unit = "hour";
      break;
    case "AWS WAF (Web Application Firewall)":
      s.pricePerUnit = 0.60;
      s.unit = "rule";
      break;
    case "AWS Route 53":
      s.pricePerUnit = 0.50;
      s.unit = "zone";
      break;
    case "AWS Backup":
      s.pricePerUnit = 0.05;
      s.unit = "GB";
      break;
  }
});
// Elements references
const cardsContainer = document.getElementById("cards-container");
const searchInput = document.getElementById("search");
const categoryFilter = document.getElementById("category-filter");
const toggleDarkBtn = document.getElementById("toggle-dark");
const multiServiceSelector = document.getElementById("multi-service-selector");
const durationSelectorSingle = document.getElementById("duration-selector-single");
const addSelectedServicesBtn = document.getElementById("add-selected-services");
const estimateList = document.getElementById("estimate-list");
const estimateTableBody = document.querySelector("#estimate-list tbody");
const totalCostDisplay = document.getElementById("total-cost");
const removeAllButton = document.getElementById("remove-all");

let selectedEstimates = [];

// Populate category filter dropdown
function populateCategories() {
  const categories = new Set(services.map(s => s.category));
  categoryFilter.innerHTML = '<option value="All">All</option>';
  categories.forEach(cat => {
    const option = document.createElement("option");
    option.value = cat;
    option.textContent = cat;
    categoryFilter.appendChild(option);
  });
}

// Render service cards
function renderCards() {
  const searchTerm = searchInput.value.trim().toLowerCase();
  const selectedCategory = categoryFilter.value;
  cardsContainer.innerHTML = "";
  const filtered = services.filter(service =>
    (service.name.toLowerCase().includes(searchTerm) || service.description.toLowerCase().includes(searchTerm)) &&
    (selectedCategory === "All" || service.category === selectedCategory)
  );

  if (filtered.length === 0) {
    cardsContainer.innerHTML = "<p>No services found.</p>";
    return;
  }

  filtered.forEach(service => {
    const card = document.createElement("article");
    card.classList.add("card");
    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "listitem");
    card.innerHTML = `
    <img src="${service.image || 'images/default.png'}" alt="${service.name} logo" class="service-image" />
      <h3>
        <a href="${service.link}" target="_blank" rel="noopener" tabindex="-1">${service.name}</a>
        <span class="toggle-icon" role="button" aria-expanded="false" tabindex="0" aria-label="Toggle details for ${service.name}">&#x25BC;</span>
      </h3>
      <p class="cost">${service.cost}</p>
      <p class="tier-detail">${service.tierDetail}</p>
      <p class="description">${service.description}</p>
      <p class="strategy">${service.strategy}</p>
      <span class="badge ${service.badgeClass}">${service.badge}</span>
    `;
    cardsContainer.appendChild(card);

    const toggleIcon = card.querySelector(".toggle-icon");
    function toggleDetails() {
      const expanded = card.classList.toggle("expanded");
      toggleIcon.setAttribute("aria-expanded", expanded);
    }
    toggleIcon.addEventListener("click", toggleDetails);
    toggleIcon.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        toggleDetails();
      }
    });
    card.addEventListener("keydown", (e) => {
      if (e.target === card && (e.key === "Enter" || e.key === " ")) {
        e.preventDefault();
        toggleDetails();
      }
    });
  });
}

// Toggle dark mode
function toggleDarkMode() {
  const isDark = document.body.classList.toggle("dark");
  toggleDarkBtn.setAttribute("aria-pressed", isDark);
  toggleDarkBtn.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
}

// Populate multi-service selector dropdown
function populateMultiSelector() {
  multiServiceSelector.innerHTML = "";
  const allOption = document.createElement("option");
  allOption.value = "__all__";
  allOption.textContent = "All Services";
  multiServiceSelector.appendChild(allOption);

  services.forEach(s => {
    const option = document.createElement("option");
    option.value = s.name;
    option.textContent = s.name;
    multiServiceSelector.appendChild(option);
  });
}

// Update total cost display
function updateTotalCost() {
  const total = selectedEstimates.reduce((sum, est) => sum + est.usage * est.pricePerUnit, 0);
  totalCostDisplay.textContent = `Total: $${total.toFixed(4)}`;
}

// Render selected services with usage and costs
function renderEstimateList() {
  estimateTableBody.innerHTML = "";

  if (selectedEstimates.length === 0) {
    estimateList.style.display = 'none';
    totalCostDisplay.textContent = "Total: $0.0000";
    return;
  }

estimateList.style.removeProperty('display');


  selectedEstimates.forEach(est => {
    const total = est.usage * est.pricePerUnit;

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>${est.name}</td>
      <td>${est.usage.toLocaleString()} ${est.unit}</td>
      <td>$${est.pricePerUnit.toFixed(6)}</td>
      <td>$${total.toFixed(4)}</td>
      <td><button class="remove-btn">Remove</button></td>
    `;

    tr.querySelector(".remove-btn").addEventListener("click", () => {
      selectedEstimates = selectedEstimates.filter(e => e.name !== est.name);
      renderEstimateList();
      updateTotalCost();
    });

    estimateTableBody.appendChild(tr);
  });

  updateTotalCost();
}

// Handle adding selected services to estimate list
addSelectedServicesBtn.addEventListener("click", () => {
  const selectedOptions = Array.from(multiServiceSelector.selectedOptions);
  console.log("Selected options:", selectedOptions.map(opt => opt.value));
  const duration = durationSelectorSingle.value;

  if (selectedOptions.length === 0 || duration === "0") {
    alert("Please select at least one service and a duration.");
    return;
  }

  // Usage based on duration
  const usageByDuration = {
    "1w": { hours: 168, GB: 100 },
    "2w": { hours: 336, GB: 200 },
    "1m": { hours: 730, GB: 500 },
    "2m": { hours: 1460, GB: 1000 }
  };

  const usageHours = usageByDuration[duration]?.hours || 0;
  const usageGB = usageByDuration[duration]?.GB || 0;

  // If "All Services" selected
  if (selectedOptions.some(opt => opt.value === "__all__")) {
    selectedEstimates = services.map(svc => {
      let usage = 0;
      if (svc.unit === "hour") usage = usageHours;
      else if (svc.unit === "GB") usage = usageGB;
      else if (["request", "publish", "query", "transition"].some(u => svc.unit.includes(u))) usage = usageHours * 1_000_000;
      else if (svc.unit === "WCU/RCU") usage = 50;
      else if (svc.unit === "minute") usage = usageHours * 60;
      else usage = 10;

      return {
        name: svc.name,
        usage,
        unit: svc.unit || "unit",
        pricePerUnit: svc.pricePerUnit ?? 0
      };
    });
  } else {
    selectedOptions
      .filter(opt => opt.value !== "__all__")
      .forEach(opt => {
        const svc = services.find(s => s.name === opt.value);
        if (!svc) {
          console.warn(`Service not found for option: ${opt.value}`);
          return;
        }
        if (selectedEstimates.some(e => e.name === svc.name)) return;

        let usage = 0;
        if (svc.unit === "hour") usage = usageHours;
        else if (svc.unit === "GB") usage = usageGB;
        else if (["request", "publish", "query", "transition"].some(u => svc.unit.includes(u))) usage = usageHours * 1_000_000;
        else if (svc.unit === "WCU/RCU") usage = 50;
        else if (svc.unit === "minute") usage = usageHours * 60;
        else usage = 10;

        selectedEstimates.push({
          name: svc.name,
          usage,
          unit: svc.unit || "unit",
          pricePerUnit: svc.pricePerUnit ?? 0
        });
      });
  }

  renderEstimateList();
});

// Remove all button handler
removeAllButton.addEventListener("click", () => {
  selectedEstimates = [];
  renderEstimateList();
});

// Other event listeners
toggleDarkBtn.addEventListener("click", toggleDarkMode);
searchInput.addEventListener("input", renderCards);
categoryFilter.addEventListener("change", renderCards);

// Initializations
populateCategories();
populateMultiSelector();
renderCards();
renderEstimateList(); // Start with estimate list hidden because empty
updateTotalCost();

console.log(selectedEstimates.length);
console.log(document.getElementById("estimate-list").style.display);
