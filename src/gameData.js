// This file defines the content for the game rounds.
// By separating the game data from the component logic, we can easily
// add new prompts and answers without changing the core application code.

// First, we define all possible answer cards as a dictionary of objects.
// This allows us to reuse answers across different prompts if needed.
export const ANSWERS = {
  // Correct Answer for the 'Pillars' prompt
  CORRECT_PILLARS: {
    id: 'correct_pillars',
    title: 'The Four Pillars',
    lines: [
      'Containers',
      'Microservices',
      'Service Mesh',
      'Immutable Infrastructure',
    ],
  },
  // Decoy Answers for 'Pillars'
  FOUR_CS: {
    id: 'four_cs',
    title: "The 4 C's of",
    titlealt: 'Cloud Native Security',
    lines: ['Cloud', 'Cluster', 'Container', 'Code'],
  },
  GOLDEN_SIGNALS: {
    id: 'golden_signals',
    title: 'The Four',
    titlealt: 'Golden Signals',
    lines: ['Latency', 'Traffic', 'Errors', 'Saturation'],
  },
  CIS_BENCHMARK: {
    id: 'cis_benchmark',
    title: 'CIS Kubernetes',
    titlealt: 'Benchmark',
    lines: ['Control Plane', 'Worker Nodes', 'etcd', 'Policies'],
  },
  ANTI_PILLARS: {
    id: 'anti_pillars',
    title: "The 'Anti'-Pillars",
    lines: ['Virtual Machines', 'Monoliths', 'FTP', 'Snowflake Servers'],
  },

  // KCNA Question Set
  // Q1: Get Pods Command
  KUBECTL_GET_PODS: { id: 'q1_correct', lines: ['kubectl get pods'] },
  KUBECTL_LIST_PODS: { id: 'q1_decoy1', lines: ['kubectl list pods'] },
  KUBECTL_SHOW_PODS: { id: 'q1_decoy2', lines: ['kubectl show pods'] },
  KUBECTL_PODS: { id: 'q1_decoy3', lines: ['kubectl pods'] },

  // Q2: Control Plane Component
  KUBE_API_SERVER: { id: 'q2_correct', lines: ['kube-apiserver'] },
  KUBELET: { id: 'q2_decoy1', lines: ['kubelet'] },
  CONTAINERD_RUNTIME: { id: 'q2_decoy2', lines: ['containerd'] },
  DOCKER_DECOR: { id: 'q2_decoy3', lines: ['docker'] },

  // Q3: Service Purpose
  SERVICE_STABLE_ENDPOINT: { id: 'q3_correct', lines: ['Provide a stable network endpoint for a set of pods'] },
  SERVICE_RESTART_PODS: { id: 'q3_decoy1', lines: ['Restart pods that have crashed'] },
  SERVICE_RESOURCE_LIMITS: { id: 'q3_decoy2', lines: ['Define resource limits for pods'] },
  SERVICE_PACKAGE_APP: { id: 'q3_decoy3', lines: ['Package an application and its dependencies'] },

  // Q4: etcd Role
  ETCD_STORE_STATE: { id: 'q4_correct', lines: ["Store the cluster's state and configuration"] },
  ETCD_RUN_CONTAINERS: { id: 'q4_decoy1', lines: ['Run containers on worker nodes'] },
  ETCD_SCHEDULE_PODS: { id: 'q4_decoy2', lines: ['Schedule pods onto nodes'] },
  ETCD_PROVIDE_MESH: { id: 'q4_decoy3', lines: ['Provide a service mesh for pods'] },

  // Q5: CNCF Graduated Project
  PROMETHEUS: { id: 'q5_correct', lines: ['Prometheus'] },
  ARGO: { id: 'q5_decoy1', lines: ['Argo'] },
  HELM: { id: 'q5_decoy2', lines: ['Helm'] },
  FALCO: { id: 'q5_decoy3', lines: ['Falco'] },

  // Q6: CRI-compliant runtime
  CRI_CONTAINERD: { id: 'q6_correct', lines: ['containerd'] },
  CRI_DOCKER: { id: 'q6_decoy1', lines: ['Docker'] },
  CRI_RKT: { id: 'q6_decoy2', lines: ['rkt'] },
  CRI_LXC: { id: 'q6_decoy3', lines: ['LXC'] },

  // Q7: ConfigMap Usage
  CONFIGMAP_DECOUPLE: { id: 'q7_correct', lines: ['To decouple configuration artifacts from container images'] },
  CONFIGMAP_SECRETS: { id: 'q7_decoy1', lines: ['To store sensitive information like passwords'] },
  CONFIGMAP_STORAGE: { id: 'q7_decoy2', lines: ['To define persistent storage for a pod'] },
  CONFIGMAP_DESIRED_STATE: { id: 'q7_decoy3', lines: ['To define the desired state of a deployment'] },

  // Q8: Smallest Deployable Unit
  POD_UNIT: { id: 'q8_correct', lines: ['Pod'] },
  CONTAINER_UNIT: { id: 'q8_decoy1', lines: ['Container'] },
  NODE_UNIT: { id: 'q8_decoy2', lines: ['Node'] },
  DEPLOYMENT_UNIT: { id: 'q8_decoy3', lines: ['Deployment'] },

  // Q9: Deployment Update
  ROLLING_UPDATE: { id: 'q9_correct', lines: ['It triggers a rolling update to the pods'] },
  DELETE_ALL_PODS: { id: 'q9_decoy1', lines: ['It deletes all old pods at once and creates new ones'] },
  MANUAL_RESTART: { id: 'q9_decoy2', lines: ['It requires a manual restart of the cluster'] },
  AUTO_SCALE_UP: { id: 'q9_decoy3', lines: ['It automatically scales the number of pods up'] },

  // Q10: Expose to Internet
  INGRESS_OBJECT: { id: 'q10_correct', lines: ['Ingress'] },
  SERVICE_OBJECT: { id: 'q10_decoy1', lines: ['Service'] },
  NETWORK_POLICY: { id: 'q10_decoy2', lines: ['NetworkPolicy'] },
  ENDPOINT_SLICE: { id: 'q10_decoy3', lines: ['EndpointSlice'] },
};

// Next, we define an array of "rounds". Each round consists of a prompt,
// a hand of answer cards, and the ID of the correct answer.
export const ROUNDS = [
  {
    prompt: {
      text: "What are the four pillars of the Cloud Native Computing Foundation (CNCF) definition of 'Cloud Native'",
    },
    answers: [
      ANSWERS.CORRECT_PILLARS,
      ANSWERS.FOUR_CS,
      ANSWERS.GOLDEN_SIGNALS,
      ANSWERS.CIS_BENCHMARK,
      ANSWERS.ANTI_PILLARS,
    ],
    correctAnswerId: 'correct_pillars',
  },
  {
    prompt: { text: "Which command is used to list all pods in the default namespace?" },
    answers: [ANSWERS.KUBECTL_GET_PODS, ANSWERS.KUBECTL_LIST_PODS, ANSWERS.KUBECTL_SHOW_PODS, ANSWERS.KUBECTL_PODS],
    correctAnswerId: 'q1_correct',
  },
  {
    prompt: { text: "Which of these is a core component of the Kubernetes control plane?" },
    answers: [ANSWERS.KUBE_API_SERVER, ANSWERS.KUBELET, ANSWERS.CONTAINERD_RUNTIME, ANSWERS.DOCKER_DECOR],
    correctAnswerId: 'q2_correct',
  },
  {
    prompt: { text: "What is the primary purpose of a Kubernetes Service?" },
    answers: [ANSWERS.SERVICE_STABLE_ENDPOINT, ANSWERS.SERVICE_RESTART_PODS, ANSWERS.SERVICE_RESOURCE_LIMITS, ANSWERS.SERVICE_PACKAGE_APP],
    correctAnswerId: 'q3_correct',
  },
  {
    prompt: { text: "What is the role of etcd in a Kubernetes cluster?" },
    answers: [ANSWERS.ETCD_STORE_STATE, ANSWERS.ETCD_RUN_CONTAINERS, ANSWERS.ETCD_SCHEDULE_PODS, ANSWERS.ETCD_PROVIDE_MESH],
    correctAnswerId: 'q4_correct',
  },
  {
    prompt: { text: "Which of the following is a 'Graduated' CNCF project?" },
    answers: [ANSWERS.PROMETHEUS, ANSWERS.ARGO, ANSWERS.HELM, ANSWERS.FALCO],
    correctAnswerId: 'q5_correct',
  },
  {
    prompt: { text: "Which of the following is a CRI-compliant container runtime?" },
    answers: [ANSWERS.CRI_CONTAINERD, ANSWERS.CRI_DOCKER, ANSWERS.CRI_RKT, ANSWERS.CRI_LXC],
    correctAnswerId: 'q6_correct',
  },
  {
    prompt: { text: "How are ConfigMaps typically used in Kubernetes?" },
    answers: [ANSWERS.CONFIGMAP_DECOUPLE, ANSWERS.CONFIGMAP_SECRETS, ANSWERS.CONFIGMAP_STORAGE, ANSWERS.CONFIGMAP_DESIRED_STATE],
    correctAnswerId: 'q7_correct',
  },
  {
    prompt: { text: "What is the smallest and simplest unit in the Kubernetes object model that you create or deploy?" },
    answers: [ANSWERS.POD_UNIT, ANSWERS.CONTAINER_UNIT, ANSWERS.NODE_UNIT, ANSWERS.DEPLOYMENT_UNIT],
    correctAnswerId: 'q8_correct',
  },
  {
    prompt: { text: "What behavior does a standard Kubernetes Deployment trigger when you update its pod template (e.g., container image)?" },
    answers: [ANSWERS.ROLLING_UPDATE, ANSWERS.DELETE_ALL_PODS, ANSWERS.MANUAL_RESTART, ANSWERS.AUTO_SCALE_UP],
    correctAnswerId: 'q9_correct',
  },
  {
    prompt: { text: "Which Kubernetes object provides HTTP routing for services, allowing you to expose them externally?" },
    answers: [ANSWERS.INGRESS_OBJECT, ANSWERS.SERVICE_OBJECT, ANSWERS.NETWORK_POLICY, ANSWERS.ENDPOINT_SLICE],
    correctAnswerId: 'q10_correct',
  },
];
