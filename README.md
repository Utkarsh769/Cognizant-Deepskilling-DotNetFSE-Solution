<div align="center">

<h1>
  <img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=700&size=28&pause=1000&color=6C63FF&center=true&vCenter=true&width=700&lines=Cognizant+Digital+Nurture+5.0;.NET+Full+Stack+Engineer+%E2%80%94+Training+Repo" alt="Typing SVG" />
</h1>

### *A complete, week-by-week hands-on journey through modern .NET development*

<br/>

<table>
<tr>
<td align="center"><b>🗓️ Weeks</b></td>
<td align="center"><b>🧪 Labs & Exercises</b></td>
<td align="center"><b>🛠️ Technologies</b></td>
<td align="center"><b>📋 License</b></td>
</tr>
<tr>
<td align="center">4 Weeks</td>
<td align="center">25+ Hands-on Labs</td>
<td align="center">C# · .NET 8 · EF Core · JWT</td>
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
  WEEK 1                WEEK 2                WEEK 3                WEEK 4
─────────────        ─────────────        ─────────────        ─────────────
 Algorithms           EF Core               Web API              Microservices
 DataStructures       Code-First            REST + Swagger        JWT Auth
 Design Patterns      LINQ + CRUD           CORS + Kafka          Role-Based
 SOLID + DI           Migrations            JWT in APIs           Token Expiry
 NUnit + Moq          Relationships         Custom Filters        Security
 SQL Server           Concurrency           CRUD via API          Graceful Errors
     │                    │                    │                    │
     ▼                    ▼                    ▼                    ▼
  Foundation          Data Layer           API Layer           Security Layer
```

</div>

---

## 📌 About This Repository

This is a structured, **week-by-week portfolio** of every lab and exercise completed during **Cognizant's Digital Nurture 5.0 (.NET FSE)** training program.

It covers the full spectrum of modern .NET development — starting from core algorithms and SOLID design principles, progressing through Entity Framework Core Code-First workflows, building and documenting production-grade REST APIs, integrating Kafka for event-driven messaging, and finally securing microservices with JWT authentication and role-based authorization.

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
└── 📅 Week-4  ── Microservices & JWT Security
    ├── 🔑 Ex1_JWT_Authentication     →  JWT Auth in Microservices
    ├── 🛡️  Ex2_Secure_Endpoint        →  Protecting API Endpoints
    ├── 👑 Ex3_Role_Based_Authorization → Admin Role · Claims-based Access
    └── ⏱️  Ex4_Token_Expiry_Handling   →  Expired Token · Custom Error Response
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
<td><b>Messaging</b></td>
<td>Apache Kafka</td>
<td>Latest</td>
</tr>
<tr>
<td><b>IDE & VCS</b></td>
<td>Visual Studio 2022 · Git</td>
<td>2022 / Latest</td>
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

---

## 🎯 Skills Gained

<div align="center">

<table>
<tr>
<td align="center" width="20%">

**🧱 Foundations**
─────────
OOP · C#
Algorithms
Data Structures
Big-O Analysis

</td>
<td align="center" width="20%">

**🎨 Architecture**
─────────
SOLID
Design Patterns
Dependency Injection
Clean Code

</td>
<td align="center" width="20%">

**🗄️ Data**
─────────
SQL Server
EF Core ORM
LINQ
Optimistic Concurrency

</td>
<td align="center" width="20%">

**🌐 APIs**
─────────
REST Web APIs
Swagger Docs
CRUD Operations
Kafka Messaging

</td>
<td align="center" width="20%">

**🔐 Security**
─────────
JWT Auth
Role-Based Access
Claims & Tokens
Token Expiry

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
│   ◈  Role-based authorization with Admin claims                       │
│   ◈  Graceful token expiry with custom response headers               │
│   ◈  SOLID principles applied with real C# examples                  │
│   ◈  4 Design Patterns  —  Singleton · Factory · Builder · Adapter   │
│   ◈  NUnit test suite  +  Moq dependency isolation                   │
│   ◈  SQL Server  —  procedures · triggers · transactions             │
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
║                                                              ║
╚══════════════════════════════════════════════════════════════╝
```

</div>
