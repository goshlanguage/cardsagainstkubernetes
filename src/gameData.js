// This file defines the content for the game rounds.
// By separating the game data from the component logic, we can easily
// add new prompts and answers without changing the core application code.

export const gameData = {
  decks: {
    KCNA: {
      answers: {
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
        SERVICE_STABLE_ENDPOINT: {
          id: 'q3_correct',
          lines: ['Provide a stable network endpoint for a set of pods'],
        },
        SERVICE_RESTART_PODS: {
          id: 'q3_decoy1',
          lines: ['Restart pods that have crashed'],
        },
        SERVICE_RESOURCE_LIMITS: {
          id: 'q3_decoy2',
          lines: ['Define resource limits for pods'],
        },
        SERVICE_PACKAGE_APP: {
          id: 'q3_decoy3',
          lines: ['Package an application and its dependencies'],
        },

        // Q4: etcd Role
        ETCD_STORE_STATE: {
          id: 'q4_correct',
          lines: ["Store the cluster's state and configuration"],
        },
        ETCD_RUN_CONTAINERS: {
          id: 'q4_decoy1',
          lines: ['Run containers on worker nodes'],
        },
        ETCD_SCHEDULE_PODS: {
          id: 'q4_decoy2',
          lines: ['Schedule pods onto nodes'],
        },
        ETCD_PROVIDE_MESH: {
          id: 'q4_decoy3',
          lines: ['Provide a service mesh for pods'],
        },

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
        CONFIGMAP_DECOUPLE: {
          id: 'q7_correct',
          lines: ['To decouple configuration artifacts from container images'],
        },
        CONFIGMAP_SECRETS: {
          id: 'q7_decoy1',
          lines: ['To store sensitive information like passwords'],
        },
        CONFIGMAP_STORAGE: {
          id: 'q7_decoy2',
          lines: ['To define persistent storage for a pod'],
        },
        CONFIGMAP_DESIRED_STATE: {
          id: 'q7_decoy3',
          lines: ['To define the desired state of a deployment'],
        },

        // Q8: Smallest Deployable Unit
        POD_UNIT: { id: 'q8_correct', lines: ['Pod'] },
        CONTAINER_UNIT: { id: 'q8_decoy1', lines: ['Container'] },
        NODE_UNIT: { id: 'q8_decoy2', lines: ['Node'] },
        DEPLOYMENT_UNIT: { id: 'q8_decoy3', lines: ['Deployment'] },

        // Q9: Deployment Update
        ROLLING_UPDATE: {
          id: 'q9_correct',
          lines: ['It triggers a rolling update to the pods'],
        },
        DELETE_ALL_PODS: {
          id: 'q9_decoy1',
          lines: ['It deletes all old pods at once and creates new ones'],
        },
        MANUAL_RESTART: {
          id: 'q9_decoy2',
          lines: ['It requires a manual restart of the cluster'],
        },
        AUTO_SCALE_UP: {
          id: 'q9_decoy3',
          lines: ['It automatically scales the number of pods up'],
        },

        // Q10: Expose to Internet
        INGRESS_OBJECT: { id: 'q10_correct', lines: ['Ingress'] },
        SERVICE_OBJECT: { id: 'q10_decoy1', lines: ['Service'] },
        NETWORK_POLICY: { id: 'q10_decoy2', lines: ['NetworkPolicy'] },
        ENDPOINT_SLICE: { id: 'q10_decoy3', lines: ['EndpointSlice'] },
      },
      rounds: [
        {
          prompt: {
            text: "What are the four pillars of the Cloud Native Computing Foundation (CNCF) definition of 'Cloud Native'",
          },
          answers: [
            'CORRECT_PILLARS',
            'FOUR_CS',
            'GOLDEN_SIGNALS',
            'CIS_BENCHMARK',
            'ANTI_PILLARS',
          ],
          correctAnswerId: 'correct_pillars',
        },
        {
          prompt: {
            text: 'Which command is used to list all pods in the default namespace?',
          },
          answers: [
            'KUBECTL_GET_PODS',
            'KUBECTL_LIST_PODS',
            'KUBECTL_SHOW_PODS',
            'KUBECTL_PODS',
          ],
          correctAnswerId: 'q1_correct',
        },
        {
          prompt: {
            text: 'Which of these is a core component of the Kubernetes control plane?',
          },
          answers: [
            'KUBE_API_SERVER',
            'KUBELET',
            'CONTAINERD_RUNTIME',
            'DOCKER_DECOR',
          ],
          correctAnswerId: 'q2_correct',
        },
        {
          prompt: {
            text: 'What is the primary purpose of a Kubernetes Service?',
          },
          answers: [
            'SERVICE_STABLE_ENDPOINT',
            'SERVICE_RESTART_PODS',
            'SERVICE_RESOURCE_LIMITS',
            'SERVICE_PACKAGE_APP',
          ],
          correctAnswerId: 'q3_correct',
        },
        {
          prompt: { text: 'What is the role of etcd in a Kubernetes cluster?' },
          answers: [
            'ETCD_STORE_STATE',
            'ETCD_RUN_CONTAINERS',
            'ETCD_SCHEDULE_PODS',
            'ETCD_PROVIDE_MESH',
          ],
          correctAnswerId: 'q4_correct',
        },
        {
          prompt: {
            text: "Which of the following is a 'Graduated' CNCF project?",
          },
          answers: ['PROMETHEUS', 'ARGO', 'HELM', 'FALCO'],
          correctAnswerId: 'q5_correct',
        },
        {
          prompt: {
            text: 'Which of the following is a CRI-compliant container runtime?',
          },
          answers: ['CRI_CONTAINERD', 'CRI_DOCKER', 'CRI_RKT', 'CRI_LXC'],
          correctAnswerId: 'q6_correct',
        },
        {
          prompt: { text: 'How are ConfigMaps typically used in Kubernetes?' },
          answers: [
            'CONFIGMAP_DECOUPLE',
            'CONFIGMAP_SECRETS',
            'CONFIGMAP_STORAGE',
            'CONFIGMAP_DESIRED_STATE',
          ],
          correctAnswerId: 'q7_correct',
        },
        {
          prompt: {
            text: 'What is the smallest and simplest unit in the Kubernetes object model that you create or deploy?',
          },
          answers: [
            'POD_UNIT',
            'CONTAINER_UNIT',
            'NODE_UNIT',
            'DEPLOYMENT_UNIT',
          ],
          correctAnswerId: 'q8_correct',
        },
        {
          prompt: {
            text: 'What behavior does a standard Kubernetes Deployment trigger when you update its pod template (e.g., container image)?',
          },
          answers: [
            'ROLLING_UPDATE',
            'DELETE_ALL_PODS',
            'MANUAL_RESTART',
            'AUTO_SCALE_UP',
          ],
          correctAnswerId: 'q9_correct',
        },
        {
          prompt: {
            text: 'Which Kubernetes object provides HTTP routing for services, allowing you to expose them externally?',
          },
          answers: [
            'INGRESS_OBJECT',
            'SERVICE_OBJECT',
            'NETWORK_POLICY',
            'ENDPOINT_SLICE',
          ],
          correctAnswerId: 'q10_correct',
        },
      ],
    },
    KCSA: {
      answers: {
        TRIVY_SCAN: { id: 'kcsa_q1_correct', lines: ['Scan container images for vulnerabilities.'] },
        TRIVY_DECOY1: { id: 'kcsa_q1_decoy1', lines: ['Manage network policies.'] },
        TRIVY_DECOY2: { id: 'kcsa_q1_decoy2', lines: ['Automate cluster provisioning.'] },
        TRIVY_DECOY3: { id: 'kcsa_q1_decoy3', lines: ['Monitor application performance.'] },

        FALCO_MONITOR: { id: 'kcsa_q2_correct', lines: ['Falco'] },
        FALCO_DECOY1: { id: 'kcsa_q2_decoy1', lines: ['Prometheus'] },
        FALCO_DECOY2: { id: 'kcsa_q2_decoy2', lines: ['Grafana'] },
        FALCO_DECOY3: { id: 'kcsa_q2_decoy3', lines: ['Kube-router'] },

        NETPOL_DENY: { id: 'kcsa_q3_correct', lines: ['Deny all ingress and egress traffic.'] },
        NETPOL_DECOY1: { id: 'kcsa_q3_decoy1', lines: ['Allow all ingress and egress traffic.'] },
        NETPOL_DECOY2: { id: 'kcsa_q3_decoy2', lines: ['Allow only ingress traffic.'] },
        NETPOL_DECOY3: { id: 'kcsa_q3_decoy3', lines: ['Allow only egress traffic.'] },

        KYVERNO_POLICY: { id: 'kcsa_q4_correct', lines: ['Kyverno'] },
        KYVERNO_DECOY1: { id: 'kcsa_q4_decoy1', lines: ['etcd'] },
        KYVERNO_DECOY2: { id: 'kcsa_q4_decoy2', lines: ['CoreDNS'] },
        KYVERNO_DECOY3: { id: 'kcsa_q4_decoy3', lines: ['Fluentd'] },

        RBAC_GRANT: { id: 'kcsa_q5_correct', lines: ['It grants the permissions defined in a Role or ClusterRole to a user, group, or service account.'] },
        RBAC_DECOY1: { id: 'kcsa_q5_decoy1', lines: ['It defines a set of permissions.'] },
        RBAC_DECOY2: { id: 'kcsa_q5_decoy2', lines: ['It creates a new user.'] },
        RBAC_DECOY3: { id: 'kcsa_q5_decoy3', lines: ['It specifies resource quotas for a namespace.'] },
      },
      rounds: [
        {
          prompt: { text: "What is the primary function of Trivy in a Kubernetes environment?" },
          answers: [
            'TRIVY_SCAN',
            'TRIVY_DECOY1',
            'TRIVY_DECOY2',
            'TRIVY_DECOY3',
          ],
          correctAnswerId: 'kcsa_q1_correct',
        },
        {
          prompt: { text: "Which tool is used for runtime security monitoring and threat detection in Kubernetes by analyzing kernel-level events?" },
          answers: [
            'FALCO_MONITOR',
            'FALCO_DECOY1',
            'FALCO_DECOY2',
            'FALCO_DECOY3',
          ],
          correctAnswerId: 'kcsa_q2_correct',
        },
        {
          prompt: { text: "What is the default behavior of a Kubernetes NetworkPolicy?" },
          answers: [
            'NETPOL_DENY',
            'NETPOL_DECOY1',
            'NETPOL_DECOY2',
            'NETPOL_DECOY3',
          ],
          correctAnswerId: 'kcsa_q3_correct',
        },
        {
          prompt: { text: "Which tool can be used to enforce policies on Kubernetes resources as they are created or updated, for example to require that all images come from a trusted registry?" },
          answers: [
            'KYVERNO_POLICY',
            'KYVERNO_DECOY1',
            'KYVERNO_DECOY2',
            'KYVERNO_DECOY3',
          ],
          correctAnswerId: 'kcsa_q4_correct',
        },
        {
          prompt: { text: "In Kubernetes RBAC, what does a RoleBinding or ClusterRoleBinding do?" },
          answers: [
            'RBAC_GRANT',
            'RBAC_DECOY1',
            'RBAC_DECOY2',
            'RBAC_DECOY3',
          ],
          correctAnswerId: 'kcsa_q5_correct',
        },
      ]
    }
  },
};