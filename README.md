<div align="center">

<h1>
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&pause=1000&color=6C63FF&center=true&vCenter=true&width=700&lines=Cognizant+Digital+Nurture+5.0;.NET+Full+Stack+Engineer+%E2%80%94+Training+Repo" alt="Typing SVG" />
</h1>

### *A complete, week-by-week hands-on journey through modern .NET & Full Stack development*

<br/>

<table>
<tr>
<td align="center"><b>🗓️ Weeks</b></td>
<td align="center"><b>🧪 Labs & Exercises</b></td>
<td align="center"><b>🛠️ Technologies</b></td>
<td align="center"><b>📋 License</b></td>
</tr>
<tr>
<td align="center">6 Weeks</td>
<td align="center">60+ Hands-on Labs</td>
<td align="center">C# · .NET 8 · React · Angular · Git</td>
<td align="center">MIT</td>
</tr>
</table>

<br/>

```
 ██████╗ ███╗   ██╗    ██████╗  ███████╗    ███████╗███████╗███████╗
██╔════╝ ████╗  ██║    ██╔══██╗ ██╔════╝    ██╔════╝██╔════╝██╔════╝
██║      ██╔██╗ ██║    ██║  ██║ ███████╗    █████╗  ███████╗█████╗
██║      ██║╚██╗██║    ██║  ██║ ╚════██║    ██╔══╝       ██║██╔══╝
╚██████╗ ██║ ╚████║    ██████╔╝ ███████║    ██║     ███████║███████╗
 ╚═════╝ ╚═╝  ╚═══╝    ╚═════╝  ╚══════╝    ╚═╝     ╚══════╝╚══════╝
```

</div>

---

<div align="center">

## 🗺️ Learning Roadmap

```
WEEK 1           WEEK 2           WEEK 3           WEEK 4           WEEK 5           WEEK 6           WEEK 7
───────────      ───────────      ───────────      ───────────      ───────────      ───────────      ───────────
Algorithms       EF Core          Web API          Microservices    React JS         Git & VCS        GenAI & AI
DataStructures   Code-First       REST+Swagger     JWT Auth         Angular v20      Config & Init    Agentic AI
Design Patterns  LINQ + CRUD      CORS + Kafka     Role-Based       Components       .gitignore       Prompt Eng
SOLID + DI       Migrations       JWT in APIs      Token Expiry     Routing          Branching        Copilot
NUnit + Moq      Relationships    Custom Filters   Security         State Mgmt       Merge Conflicts  Modern AI
SQL Server       Concurrency      CRUD via API     Graceful Errors  HTTP + NgRx      Remote Sync      Agile 101
│                │                │                │                │                │                │
▼                ▼                ▼                ▼                ▼                ▼                ▼
Foundation       Data Layer       API Layer       Security Layer  Frontend Layer   DevOps Layer     AI & Agile Layer
```

</div>

---

## 📌 About This Repository

This is a structured, **week-by-week portfolio** of every lab and exercise completed during **Cognizant's Digital Nurture 5.0 (.NET FSE)** training program.

It covers the full spectrum of modern Full Stack development — starting from core algorithms and SOLID design principles, progressing through Entity Framework Core Code-First workflows, building production-grade REST APIs, integrating Kafka for event-driven messaging, securing microservices with JWT authentication, building rich frontend SPAs with **React JS** and **Angular v20**, and finally mastering **Git version control** workflows including configuration, ignoring files, branching, merging, conflict resolution, and remote collaboration.

> 💡 Every folder has **fully working, runnable code.** Clone → Open in Visual Studio 2022 → Run.

---

## 📂 Repository Structure

<details>
<summary><b>📁 Click to expand full folder tree</b></summary>

<br/>

```
Cognizant_DN5_DotNetFSE
│
├── 📅 Week-1  ── Core Foundations
│   ├── 🧮 Algorithms_DataStructures
│   ├── 🏗️  DesignPatternandPrinciples
│   ├── ✅ NUnit_and_Moq
│   └── 🗄️  SQL_AdvanceConcepts
│
├── 📅 Week-2  ── Entity Framework Core
│   └── ⚙️  EntityFramework
│       ├── Lab1_ORM                  →  Understanding ORM
│       ├── Lab2_DbContext            →  Configuring DbContext
│       ├── Lab3_Migrations           →  EF Core Migrations
│       ├── Lab4_InsertData           →  Insert Data
│       ├── Lab5_RetrieveData         →  Retrieve Data
│       ├── Lab6_UpdateDelete         →  Update & Delete Operations
│       ├── Lab7_LINQQueries          →  LINQ Queries
│       ├── Lab8_SchemaChanges        →  Schema Changes & Migrations
│       ├── Lab9_DataSeeding          →  Data Seeding
│       ├── Lab10_LoadingStrategies   →  Eager · Lazy · Explicit Loading
│       ├── Lab11_Relationships       →  Entity Relationships
│       ├── Lab12_DTOs                →  Data Transfer Objects
│       ├── Lab13_QueryTracking       →  Query Tracking
│       ├── Lab14_BulkOperations      →  Bulk Operations
│       └── Lab15_Concurrency         →  Optimistic Concurrency
│
├── 📅 Week-3  ── Web API & Kafka
│   ├── 🌐 Lab1_FirstWebAPI           →  RESTful API with .NET Core
│   ├── 📋 Lab2_SwaggerAndPostman     →  Swagger UI + Postman Testing
│   ├── 🧩 Lab3_CustomModel_Filters   →  Model Classes & Action Filters
│   ├── ✏️  Lab4_CRUD_Operations       →  Full CRUD via Web API
│   ├── 🔐 Lab5_JWT_Authentication    →  CORS · JWT · Authorization
│   └── 📨 Lab6_Kafka_Integration     →  Kafka Messaging with C#
│
├── 📅 Week-4  ── Microservices & JWT Security
│   ├── 🔑 Ex1_JWT_Authentication     →  JWT Auth in Microservices
│   ├── 🛡️  Ex2_Secure_Endpoint        →  Protecting API Endpoints
│   ├── 👑 Ex3_Role_Based_Authorization → Admin Role · Claims-based Access
│   └── ⏱️  Ex4_Token_Expiry_Handling   →  Expired Token · Custom Error Response
│
├── 📅 Week-5  ── Frontend Development
│   ├── ⚛️  ReactJS/
│   │   ├── HOL1_FirstReactApp         →  SPA Setup · create-react-app
│   │   ├── HOL2_Components            →  Class & Function Components
│   │   ├── HOL3_FunctionalComponents  →  Functional Components · CSS Modules
│   │   ├── HOL4_Lifecycle             →  componentDidMount · componentDidCatch
│   │   ├── HOL5_Styling               →  CSS Modules · Inline Styles
│   │   ├── HOL6_Routing               →  React Router · Navigation · URL Params
│   │   ├── HOL7_Props                 →  Props · Default Props · ReactDOM.render
│   │   ├── HOL8_State                 →  State Object · Counter App
│   │   ├── HOL9_ES6Features           →  map() · Arrow Functions · Destructuring
│   │   ├── HOL10_JSX                  →  JSX Syntax · Inline CSS · Expressions
│   │   ├── HOL11_EventHandling        →  Synthetic Events · Event Handlers
│   │   ├── HOL12_ConditionalRender    →  Conditional Rendering · Element Variables
│   │   └── HOL13_Lists               →  Lists · Keys · map() · Multiple Components
│   │
│   └── 🅰️  Angular/
│       ├── HOL1_Setup                 →  Angular CLI · Project Structure · Components
│       ├── HOL2_DataBinding           →  Property/Event/Two-Way Binding · Lifecycle
│       ├── HOL3_Directives_Pipes      →  ngIf/ngFor · ngClass · Custom Directive/Pipe
│       ├── HOL4_TemplateForms         →  Template-Driven Forms · Validation
│       ├── HOL5_ReactiveForms         →  FormBuilder · FormArray · Custom Validators
│       ├── HOL6_Services_DI           →  Services · Dependency Injection · Singleton
│       ├── HOL7_Routing               →  Guards · Lazy Loading · Route Parameters
│       ├── HOL8_HttpClient            →  HttpClient · RxJS · Interceptors
│       ├── HOL9_NgRx                  →  Store · Actions · Reducers · Effects
│       └── HOL10_Testing              →  Jasmine · Karma · TestBed · MockStore
│
└── 📅 Week-6  ── Git & Version Control
    ├── 🔧 HOL1_GitSetup              →  git init · config · notepad++ integration · add · commit · push · pull
    ├── 🚫 HOL2_GitIgnore             →  .gitignore · ignoring .log files & log/ folders
    ├── 🌿 HOL3_BranchingMerging      →  git branch · checkout · P4Merge · merge · log --graph
    ├── ⚡ HOL4_ConflictResolution    →  Simultaneous edits · 3-way merge · conflict markers · P4Merge
    └── 🚀 HOL5_RemotePush           →  git pull · push · branch cleanup · GitLab remote sync
```

</details>

---

## 📅 Week 1 — Core Foundations

<table>
<tr>
<td width="50%" valign="top">

### 🧮 Algorithms & Data Structures

| Topic | Details |
|:------|:--------|
| **Arrays** | Manipulation, traversal, common patterns |
| **Strings** | Processing, parsing, operations |
| **Searching** | Linear Search · Binary Search |
| **Sorting** | Bubble · Selection · Merge · Quicksort |
| **Time Complexity** | Big-O analysis & comparisons |
| **Problem Solving** | Real-world coding exercises |

</td>
<td width="50%" valign="top">

### 🗄️ SQL Server — Advanced Concepts

| Category | Topics |
|:---------|:-------|
| **DDL & DML** | CREATE · ALTER · DROP · INSERT · UPDATE · DELETE |
| **Constraints** | PRIMARY KEY · FOREIGN KEY · UNIQUE · CHECK |
| **Querying** | INNER · OUTER · CROSS Joins · Views |
| **Programmability** | Stored Procedures · User-Defined Functions |
| **Automation** | AFTER Triggers · INSTEAD OF Triggers |
| **Reliability** | Transactions · Exception Handling |

</td>
</tr>
</table>

### 🏗️ Design Patterns & SOLID Principles

<table>
<tr>
<td width="50%" valign="top">

**SOLID Principles**

| Letter | Principle | Summary |
|:------:|:----------|:--------|
| **S** | Single Responsibility | One class, one reason to change |
| **O** | Open / Closed | Extend without modifying |
| **L** | Liskov Substitution | Subtypes replace base types |
| **I** | Interface Segregation | Specific over general interfaces |
| **D** | Dependency Inversion | Depend on abstractions |

</td>
<td width="50%" valign="top">

**Design Patterns & DI**

```
Creational  →  Singleton · Factory · Builder
Structural  →  Adapter
─────────────────────────────────────────
Dependency Injection
  ├── Constructor Injection
  └── Method Injection
```

**Testing**
```
NUnit  →  Calculator · URL Parser · Accounts
         Collections · LeapYear · Exceptions
Moq    →  Mail Service · File System · Database
```

</td>
</tr>
</table>

---

## 📅 Week 2 — Entity Framework Core

> **15 progressive labs** — full Code-First journey from ORM concepts to production-ready concurrency handling.

| # | Lab | Topic | Key Concept |
|:-:|:----|:------|:------------|
| `01` | Lab1_ORM | Understanding ORM | What ORM is & why it matters |
| `02` | Lab2_DbContext | Configuring DbContext | Setup & DI registration |
| `03` | Lab3_Migrations | EF Core Migrations | Schema creation from code |
| `04` | Lab4_InsertData | Insert Data | `Add()` · `SaveChanges()` |
| `05` | Lab5_RetrieveData | Retrieve Data | `Find()` · `FirstOrDefault()` |
| `06` | Lab6_UpdateDelete | Update & Delete | Change tracking & entity state |
| `07` | Lab7_LINQQueries | LINQ Queries | Fluent & query syntax |
| `08` | Lab8_SchemaChanges | Schema Changes | Column changes · Renaming |
| `09` | Lab9_DataSeeding | Data Seeding | `HasData()` in model config |
| `10` | Lab10_LoadingStrategies | Loading Strategies | Eager · Lazy · Explicit |
| `11` | Lab11_Relationships | Entity Relationships | 1:1 · 1:N · M:N |
| `12` | Lab12_DTOs | DTOs | Decoupling domain & transport |
| `13` | Lab13_QueryTracking | Query Tracking | `AsNoTracking()` for performance |
| `14` | Lab14_BulkOperations | Bulk Operations | Batch inserts & updates |
| `15` | Lab15_Concurrency | Optimistic Concurrency | `RowVersion` · conflict handling |

```
ORM  ·  Code-First  ·  DbContext  ·  Entity Config  ·  CRUD  ·  LINQ  ·  Migrations
Data Seeding  ·  Eager/Lazy/Explicit Loading  ·  1:1  ·  1:N  ·  M:N  ·  DTOs
AsNoTracking()  ·  Bulk Operations  ·  RowVersion  ·  Optimistic Concurrency
```

---

## 📅 Week 3 — Web API & Kafka

> **6 labs** — from your first REST endpoint all the way to Kafka-powered event messaging.

| # | Lab | Topic | Key Concepts |
|:-:|:----|:------|:-------------|
| `01` | Lab1_FirstWebAPI | First Web API | REST · `HttpGet/Post/Put/Delete` · Status Codes · `ApiController` |
| `02` | Lab2_SwaggerAndPostman | Swagger & Postman | `Swashbuckle` · `AddSwaggerGen` · `ProducesResponseType` · Route attrs |
| `03` | Lab3_CustomModel_Filters | Models & Filters | `Employee` model · `[FromBody]` · `CustomAuthFilter` · `CustomExceptionFilter` |
| `04` | Lab4_CRUD_Operations | CRUD via Web API | GET · POST · PUT · DELETE · `ActionResult<T>` · BadRequest guards |
| `05` | Lab5_JWT_Authentication | CORS & JWT Auth | `AddJwtBearer` · `[Authorize]` · `[AllowAnonymous]` · Claims · Bearer |
| `06` | Lab6_Kafka_Integration | Kafka with C# | Topics · Partitions · Brokers · Zookeeper · Console & WinForms app |

```
REST  ·  HttpVerbs  ·  Status Codes  ·  Swagger  ·  Postman  ·  Route Attributes
FromBody  ·  ActionFilterAttribute  ·  IExceptionFilter  ·  CORS  ·  JWT  ·  Bearer Auth
Claims  ·  Authorize  ·  AllowAnonymous  ·  Kafka  ·  Topics  ·  Producer  ·  Consumer
```

---

## 📅 Week 4 — Microservices & JWT Security

> **4 focused exercises** — Authentication and Authorization in ASP.NET Core Web API Microservices.

<table>
<tr>
<td width="50%" valign="top">

### 🔑 Ex1 — JWT Authentication in Microservices
Setting up full JWT pipeline from scratch in a microservice.

```
✦  AddAuthentication("Bearer")
✦  AddJwtBearer with TokenValidationParameters
✦  ValidateIssuer · ValidateAudience
✦  ValidateLifetime · ValidateIssuerSigningKey
✦  SymmetricSecurityKey from appsettings.json
✦  GenerateJwtToken() → HmacSha256 signed
```

</td>
<td width="50%" valign="top">

### 🛡️ Ex2 — Secure API Endpoint
Locking down sensitive endpoints with JWT guards.

```
✦  [Authorize] on controller / action
✦  [AllowAnonymous] on login endpoint
✦  Valid token  →  200 OK
✦  No token     →  401 Unauthorized
✦  Bad token    →  401 Unauthorized
```

</td>
</tr>
<tr>
<td width="50%" valign="top">

### 👑 Ex3 — Role-Based Authorization
Admin-only access using claims embedded in JWT.

```
✦  ClaimTypes.Role = "Admin" in token
✦  [Authorize(Roles = "Admin")]
✦  AdminController → /api/admin/dashboard
✦  Non-admin token  →  403 Forbidden
✦  Admin token      →  200 OK
```

</td>
<td width="50%" valign="top">

### ⏱️ Ex4 — Token Expiry & Error Handling
Graceful handling of expired and invalid tokens.

```
✦  JwtBearerEvents → OnAuthenticationFailed
✦  SecurityTokenExpiredException detection
✦  Custom response header: Token-Expired: true
✦  Clean error messaging to API consumers
✦  No raw exceptions leaked to client
```

</td>
</tr>
</table>

```
JWT Authentication  ·  Bearer Scheme  ·  TokenValidationParameters  ·  SymmetricSecurityKey
ValidateIssuer  ·  ValidateAudience  ·  ValidateLifetime  ·  HmacSha256  ·  JwtSecurityToken
Claims  ·  ClaimTypes.Name  ·  ClaimTypes.Role  ·  [Authorize]  ·  [AllowAnonymous]
Role-Based Access  ·  Admin Dashboard  ·  JwtBearerEvents  ·  OnAuthenticationFailed
SecurityTokenExpiredException  ·  Token-Expired Header  ·  Graceful Error Handling
```

---

## 📅 Week 5 — Frontend Development

> **23 hands-on labs** split across two tracks — React JS (13 labs) and Angular v20 (10 hands-on exercises), all building real-world applications from scratch.

---

### ⚛️ Track A — React JS (13 Labs)

> All labs progressively build real React applications — from a first SPA to routing, state, ES6, events, and conditional rendering.

| # | Lab | App Built | Key Concepts |
|:-:|:----|:----------|:-------------|
| `01` | HOL1_FirstReactApp | `myfirstreact` | SPA concepts · `create-react-app` · JSX entry point |
| `02` | HOL2_Components | `StudentApp` | Class components · Multiple components · `render()` |
| `03` | HOL3_FunctionalComponents | `scorecalculatorapp` | Functional components · Props · CSS Modules |
| `04` | HOL4_Lifecycle | `blogapp` | `componentDidMount` · `componentDidCatch` · Fetch API |
| `05` | HOL5_Styling | Cohort Dashboard | CSS Modules · `className` · Inline styles · `style` prop |
| `06` | HOL6_Routing | `TrainersApp` | React Router · `<Link>` · URL params · Navigation |
| `07` | HOL7_Props | `shoppingapp` | Props · Default Props · `ReactDOM.render()` |
| `08` | HOL8_State | `counterapp` | State object · `setState()` · Constructor · Button events |
| `09` | HOL9_ES6Features | `cricketapp` | `map()` · Arrow functions · Destructuring · Spread/Merge |
| `10` | HOL10_JSX | `officespacerentalapp` | JSX syntax · `React.createElement()` · Expressions · Inline CSS |
| `11` | HOL11_EventHandling | `eventexamplesapp` | Synthetic events · `onClick` · `this` · Currency converter |
| `12` | HOL12_ConditionalRender | `ticketbookingapp` | Conditional rendering · Login/Logout toggle · Element variables |
| `13` | HOL13_Lists | `bloggerapp` | Lists · Keys · `map()` · Multiple conditional components |

```
SPA  ·  Virtual DOM  ·  JSX  ·  Class Components  ·  Functional Components
Props  ·  State  ·  setState()  ·  componentDidMount  ·  componentDidCatch
React Router  ·  URL Params  ·  CSS Modules  ·  Inline Styles  ·  Synthetic Events
ES6 map()  ·  Arrow Functions  ·  Destructuring  ·  Spread Operator
Conditional Rendering  ·  Lists & Keys  ·  ReactDOM.render()
```

---

### 🅰️ Track B — Angular v20 (10 Hands-On Exercises)

> All exercises build a single **Student Course Portal** SPA — each one adds a new Angular feature layer on top of the previous.

| # | Exercise | Feature Added | Key Concepts |
|:-:|:---------|:-------------|:-------------|
| `01` | HOL1_Setup | Project Scaffold | Angular CLI · `ng new` · `ng serve` · `ng build` · Standalone API |
| `02` | HOL2_DataBinding | Dynamic Bindings | Property/Event/Two-Way Binding · `ngModel` · `@Input` · `@Output` · `EventEmitter` |
| `03` | HOL3_Directives_Pipes | Course Listing | `*ngIf` · `*ngFor` · `*ngSwitch` · `ngClass` · `ngStyle` · Custom Directive · Custom Pipe |
| `04` | HOL4_TemplateForms | Enrollment Form | Template-driven forms · `ngForm` · Built-in validators · Error messages · `ng-touched` |
| `05` | HOL5_ReactiveForms | Reactive Enrollment | `FormBuilder` · `FormGroup` · `FormArray` · Custom sync/async validators |
| `06` | HOL6_Services_DI | Course & Enrollment | `@Injectable` · `providedIn: 'root'` · Singleton · Service-to-service injection |
| `07` | HOL7_Routing | Full Navigation | Route params · Query params · Nested routes · Lazy loading · `CanActivate` · `CanDeactivate` |
| `08` | HOL8_HttpClient | API Integration | `HttpClient` · `Observable` · RxJS `map/tap/catchError/switchMap` · Interceptors · `retry` |
| `09` | HOL9_NgRx | State Management | NgRx Store · Actions · Reducers · Selectors · Effects · `MockStore` · Redux DevTools |
| `10` | HOL10_Testing | Unit Tests | Jasmine · Karma · `TestBed` · `fixture` · `@Input/@Output` tests · `HttpClientTestingModule` |

```
Angular CLI  ·  Standalone Components  ·  Property Binding  ·  Event Binding  ·  Two-Way Binding
ngModel  ·  @Input  ·  @Output  ·  EventEmitter  ·  Lifecycle Hooks  ·  ngOnInit  ·  ngOnDestroy
*ngIf  ·  *ngFor  ·  *ngSwitch  ·  ngClass  ·  ngStyle  ·  Custom Directive  ·  Custom Pipe
Template-Driven Forms  ·  Reactive Forms  ·  FormBuilder  ·  FormArray  ·  Async Validators
Services  ·  DI  ·  Singleton  ·  Route Guards  ·  Lazy Loading  ·  Route Parameters
HttpClient  ·  Observables  ·  RxJS  ·  Interceptors  ·  NgRx  ·  Effects  ·  Selectors
Jasmine  ·  Karma  ·  TestBed  ·  MockStore  ·  HttpClientTestingModule
```

---

## 📅 Week 6 — Git & Version Control

> **5 hands-on labs** — the final stretch of the program, covering the complete Git workflow: configuration, ignoring files, branching & merging, conflict resolution, and syncing with a remote (GitLab).

| # | Lab | Topic | Key Concepts |
|:-:|:----|:------|:-------------|
| `01` | HOL1_GitSetup | Git Configuration & First Commit | `git init` · `git config --global user.name/email` · Notepad++ as default editor (`core.editor`) · `git add` · `git commit` · `git status` · `git push origin master` · `git pull origin master` |
| `02` | HOL2_GitIgnore | Ignoring Files with `.gitignore` | Creating `.log` files & a `log/` folder · Updating `.gitignore` to exclude `*.log` extensions and folders · Verifying via `git status` |
| `03` | HOL3_BranchingMerging | Branching & Merging | `git branch "GitNewBranch"` · `git branch -a` (local + remote, `*` = current) · `git checkout` · Commit on branch · Visual diff with **P4Merge** · `git merge` into trunk · `git log --oneline --graph --decorate` · `git branch -d` (delete after merge) |
| `04` | HOL4_ConflictResolution | Merge Conflict Resolution | Branch `"GitWork"` with `hello.xml` vs. conflicting master edits · `git log --oneline --graph --decorate --all` · `git diff` · Visual diff/3-way merge with **P4Merge** · Resolving conflict markers · Commit resolved file · Adding backup files to `.gitignore` · Cleaning up merged branches |
| `05` | HOL5_RemotePush | Remote Cleanup & Push | Verifying clean working tree · `git branch -a` · `git pull` (sync remote → local) · `git push` (publish pending commits) · Confirming changes reflected on GitLab remote |

```
git init  ·  git config  ·  core.editor  ·  Notepad++ Integration  ·  git add  ·  git commit
git status  ·  git push  ·  git pull  ·  .gitignore  ·  Ignoring Extensions & Folders
git branch  ·  git checkout  ·  Local vs Remote Branches  ·  P4Merge  ·  git merge
git log --oneline --graph --decorate  ·  Fast-Forward Merge  ·  Branch Deletion
3-Way Merge  ·  Conflict Markers  ·  git diff  ·  Conflict Resolution  ·  GitLab Remote Sync
```

**Lab Highlights**

```
┌─────────────────────────────────────────────────────────────────────┐
│  HOL1  →  Configure Git · integrate Notepad++ · init "GitDemo" repo  │
│           create & track welcome.txt · push/pull to GitLab           │
│                                                                       │
│  HOL2  →  Generate .log files & log/ folder · configure .gitignore   │
│           confirm ignored paths never reach git status               │
│                                                                       │
│  HOL3  →  Branch "GitNewBranch" · commit changes · diff via P4Merge  │
│           merge to trunk · graph log · delete merged branch          │
│                                                                       │
│  HOL4  →  Parallel edits to hello.xml on branch "GitWork" & master   │
│           trigger + resolve a real merge conflict with P4Merge       │
│                                                                       │
│  HOL5  →  Final sync — pull, push, and verify changes on GitLab      │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 📅 Week 7 — AI, Generative AI & Agile Foundations

> **6 core certification modules** completed through **Cognizant Skillspring**, bridging modern full-stack engineering with artificial intelligence, AI-assisted developer tooling, and Agile project management methodologies[cite: 2, 3, 4, 5, 6, 7].

| # | Course / Certification Module | Completion Date | Key Focus Areas & Competencies |
|:-:|:------------------------------|:----------------|:-------------------------------|
| `01` | **Fundamentals of Generative AI** | July 08, 2026 | Understanding Large Language Models (LLMs), generative architectures, foundation models, and real-world enterprise use cases[cite: 3]. |
| `02` | **Introduction to Agentic AI** | July 08, 2026 | Designing autonomous AI agents, multi-agent collaboration, goal-oriented decision workflows, and tool integration[cite: 5]. |
| `03` | **Foundations of Modern AI** | July 14, 2026 | Core artificial intelligence concepts, machine learning pipelines, deep neural networks, and ethical AI frameworks[cite: 2]. |
| `04` | **GitHub Copilot Fundamentals Virtual Training** | July 14, 2026 | AI-pair programming, in-IDE code generation, unit test scaffolding, inline explanations, and developer productivity[cite: 4]. |
| `05` | **ITPM — Introduction to Agile [101-Basics]** | July 14, 2026 | Agile principles, Scrum & Kanban frameworks, sprint planning, backlog grooming, daily standups, and iterative delivery[cite: 6]. |
| `06` | **Prompt Engineering Foundation** | July 17, 2026 | Crafting effective prompts, zero-shot and few-shot learning, Chain-of-Thought (CoT) reasoning, and output structuring[cite: 7]. |

## 🛠️ Tech Stack

<div align="center">

<table>
<tr>
<th>Category</th>
<th>Technology</th>
<th>Version</th>
</tr>
<tr>
<td rowspan="2"><b>Language & Runtime</b></td>
<td>C#</td>
<td>12</td>
</tr>
<tr>
<td>.NET</td>
<td>8.0</td>
</tr>
<tr>
<td rowspan="2"><b>API & ORM</b></td>
<td>ASP.NET Core Web API</td>
<td>8.x</td>
</tr>
<tr>
<td>Entity Framework Core</td>
<td>8.x</td>
</tr>
<tr>
<td rowspan="2"><b>Database</b></td>
<td>SQL Server</td>
<td>2022</td>
</tr>
<tr>
<td>LocalDB</td>
<td>—</td>
</tr>
<tr>
<td rowspan="2"><b>Security</b></td>
<td>JWT Bearer Auth</td>
<td>Latest</td>
</tr>
<tr>
<td>CORS Middleware</td>
<td>—</td>
</tr>
<tr>
<td rowspan="2"><b>Testing</b></td>
<td>NUnit</td>
<td>3.13.3</td>
</tr>
<tr>
<td>Moq</td>
<td>4.20.x</td>
</tr>
<tr>
<td rowspan="2"><b>Tooling</b></td>
<td>Swagger (Swashbuckle)</td>
<td>Latest</td>
</tr>
<tr>
<td>Postman</td>
<td>Latest</td>
</tr>
<tr>
<td rowspan="3"><b>Frontend</b></td>
<td>React JS</td>
<td>18+</td>
</tr>
<tr>
<td>Angular</td>
<td>v20</td>
</tr>
<tr>
<td>NgRx</td>
<td>Latest</td>
</tr>
<tr>
<td><b>Messaging</b></td>
<td>Apache Kafka</td>
<td>Latest</td>
</tr>
<tr>
<td rowspan="3"><b>IDE & VCS</b></td>
<td>Visual Studio 2022</td>
<td>2022</td>
</tr>
<tr>
<td>Git · Git Bash · GitLab</td>
<td>Latest</td>
</tr>
<tr>
<td>P4Merge (3-way merge tool) · Notepad++</td>
<td>Latest</td>
</tr>
</table>

</div>

---

## ⚡ Getting Started

**Prerequisites**

```
✔  .NET 8 SDK
✔  SQL Server 2022  (or LocalDB)
✔  Visual Studio 2022  with ASP.NET and web development workload
✔  Postman  ─  for API testing
✔  Apache Kafka + Zookeeper  ─  for Week 3 · Lab 6 only
✔  Git Bash + P4Merge + Notepad++  ─  for Week 6 · Git labs
```

**Clone the repo**

```bash
git clone https://github.com/utkarshraj/Cognizant_DN5_DotNetFSE.git
cd Cognizant_DN5_DotNetFSE
```

**Run Week 1 labs** — open any project in Visual Studio 2022 and press `F5`.

**Run Week 2 (EF Core)**

```bash
# 1. Update connection string in appsettings.json
# 2. Apply migrations
dotnet ef database update
```

**Run Week 3 (Web API)**

```bash
cd Week-3/Lab1_FirstWebAPI
dotnet run
# Open → https://localhost:{port}/swagger
```

**Run Week 4 (Microservices)**

```bash
cd Week-4/Ex1_JWT_Authentication
dotnet run
# POST /api/auth/login → get token → use as Bearer in headers
```

**Run Week 5 — React JS**

```bash
cd Week-5/ReactJS/HOL1_FirstReactApp
npm install
npm start
# Open → http://localhost:3000
```

**Run Week 5 — Angular**

```bash
cd Week-5/Angular/HOL1_Setup
npm install -g @angular/cli
npm install
ng serve
# Open → http://localhost:4200
```

**Run Week 6 — Git labs**

```bash
cd Week-6/HOL1_GitSetup
git init
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
git config --global core.editor "notepad++ -multiInst -notabbar -nosession -noPlugin"
git add welcome.txt
git commit
git push origin master
```

---

<div align="center">

<table>
<tr>
<td align="center" width="17%">

**🧱 Foundations**
─────────
OOP · C#
Algorithms
Data Structures
Big-O Analysis

</td>
<td align="center" width="17%">

**🎨 Architecture**
─────────
SOLID
Design Patterns
Dependency Injection
Clean Code

</td>
<td align="center" width="17%">

**🗄️ Data**
─────────
SQL Server
EF Core ORM
LINQ
Optimistic Concurrency

</td>
<td align="center" width="17%">

**🌐 APIs**
─────────
REST Web APIs
Swagger Docs
CRUD Operations
Kafka Messaging

</td>
<td align="center" width="17%">

**🔐 Security**
─────────
JWT Auth
Role-Based Access
Claims & Tokens
Token Expiry

</td>
<td align="center" width="17%">

**⚛️ Frontend**
─────────
React JS · Angular
Components & State
Routing & Guards
NgRx · RxJS

</td>
<td align="center" width="17%">

**🌿 Version Control**
─────────
Git Config
.gitignore
Branch & Merge
Conflict Resolution

</td>
</tr>
</table>

</div>

---

## ✨ Repository Highlights

<div align="center">

```
┌─────────────────────────────────────────────────────────────────────┐
│                                                                       │
│   ◈  15 EF Core labs  —  complete Code-First workflow                 │
│   ◈   6 Web API labs  —  REST to Kafka-integrated APIs               │
│   ◈   4 Microservice security exercises  —  JWT end-to-end           │
│   ◈  13 React JS labs  —  SPA · Components · State · Routing · ES6  │
│   ◈  10 Angular v20 hands-on  —  Directives · NgRx · Testing        │
│   ◈   5 Git hands-on labs  —  Config to Conflict Resolution          │
│   ◈  Role-based authorization with Admin claims                       │
│   ◈  Graceful token expiry with custom response headers               │
│   ◈  SOLID principles applied with real C# examples                  │
│   ◈  4 Design Patterns  —  Singleton · Factory · Builder · Adapter   │
│   ◈  NUnit test suite  +  Moq dependency isolation                   │
│   ◈  SQL Server  —  procedures · triggers · transactions             │
│   ◈  Real 3-way merge conflict resolved with P4Merge                 │
│   ◈  Professional week-wise folder structure                         │
│   ◈  Clean commit history  —  portfolio ready                        │
│                                                                       │
└─────────────────────────────────────────────────────────────────────┘
```

</div>

---

## 📄 License

Shared for **educational and portfolio purposes** as part of the Cognizant Digital Nurture program.
Feel free to reference it for your own learning.

---

<div align="center">

<br/>

```
╔══════════════════════════════════════════════════════════════╗
║                                                              ║
║    👨‍💻  Utkarsh Raj                                           ║
║    Cognizant Digital Nurture 5.0                             ║
║    .NET Full Stack Engineer Trainee                          ║
╚══════════════════════════════════════════════════════════════╝
```

*⭐ If this repo helped you, consider dropping a star!*

</div>
