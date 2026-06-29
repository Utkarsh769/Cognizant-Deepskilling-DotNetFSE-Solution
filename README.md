<div align="center">

# 🚀 Cognizant DN 5.0 — .NET Full Stack Engineer

**Hands-on Training Repository**

*Practical implementation of Algorithms, Data Structures, Design Patterns, Unit Testing, SQL Server, and Entity Framework Core*

[![.NET](https://img.shields.io/badge/.NET-8.0-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![C#](https://img.shields.io/badge/C%23-12-239120?style=for-the-badge&logo=csharp&logoColor=white)](https://docs.microsoft.com/en-us/dotnet/csharp/)
[![EF Core](https://img.shields.io/badge/EF%20Core-8.x-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)](https://docs.microsoft.com/en-us/ef/core/)
[![SQL Server](https://img.shields.io/badge/SQL%20Server-2022-CC2927?style=for-the-badge&logo=microsoftsqlserver&logoColor=white)](https://www.microsoft.com/en-us/sql-server)
[![NUnit](https://img.shields.io/badge/NUnit-3.13.3-brightgreen?style=for-the-badge)](https://nunit.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge)](LICENSE)

</div>

---

## 📖 Overview

This repository is a structured, week-by-week record of hands-on labs and exercises completed during **Cognizant's Digital Nurture 5.0 (.NET FSE)** program. It covers the foundations of modern .NET development — from core algorithms and SOLID design principles through to a full **Entity Framework Core Code-First workflow** against SQL Server.

Each topic is organized into its own folder with working code, so it can be cloned, opened in Visual Studio 2022, and run directly.

---

## 📂 Repository Structure

```
Cognizant_DN5_DotNetFSE
│
├── Week-1
│   ├── Algorithms_DataStructures
│   ├── DesignPatternandPrinciples
│   ├── NUnit_and_Moq
│   ├── SQL_AdvanceConcepts
│   └── README.md
│
├── Week-2
│   ├── EntityFramework
│   │   ├── Lab1_ORM
│   │   ├── Lab2_DbContext
│   │   ├── Lab3_Migrations
│   │   ├── Lab4_InsertData
│   │   ├── Lab5_RetrieveData
│   │   ├── Lab6_UpdateDelete
│   │   ├── Lab7_LINQQueries
│   │   ├── Lab8_SchemaChanges
│   │   ├── Lab9_DataSeeding
│   │   ├── Lab10_LoadingStrategies
│   │   ├── Lab11_Relationships
│   │   ├── Lab12_DTOs
│   │   ├── Lab13_QueryTracking
│   │   ├── Lab14_BulkOperations
│   │   └── Lab15_Concurrency
│   └── README.md
│
└── README.md
```

---

## 📅 Week 1

### 🧮 Algorithms & Data Structures

| Topic | Description |
|-------|-------------|
| Arrays | Array manipulation and common patterns |
| Strings | String processing and operations |
| Searching | Linear search, binary search |
| Sorting | Bubble, selection, merge, quicksort |
| Time Complexity | Big-O analysis and comparison |
| Problem Solving | Real-world exercises |

### 🏗️ Design Patterns & SOLID Principles

**SOLID Principles**
- **S** — Single Responsibility Principle (SRP)
- **O** — Open/Closed Principle (OCP)
- **L** — Liskov Substitution Principle (LSP)
- **I** — Interface Segregation Principle (ISP)
- **D** — Dependency Inversion Principle (DIP)

**Design Patterns**
- Singleton Pattern
- Factory Pattern
- Builder Pattern
- Adapter Pattern

**Dependency Injection**
- Constructor Injection
- Method Injection

### ✅ NUnit & Moq

**NUnit Test Exercises**
- Calculator Tests
- URL Host Name Parser Tests
- Accounts Manager Tests
- Collections Tests
- Four Seasons Tests
- Leap Year Tests
- User Manager Exception Tests

**Moq Mock Exercises**
- Mock Mail Service
- Mock File System
- Mock Database

### 🗄️ SQL Server — Advanced Concepts

| Category | Topics |
|----------|--------|
| DDL & DML | Commands, Constraints |
| Querying | Joins, Views |
| Programmability | Stored Procedures, User-Defined Functions |
| Automation | Triggers |
| Reliability | Transactions, Exception Handling |

---

## 📅 Week 2

### ⚙️ Entity Framework Core

15 hands-on labs covering the complete **EF Core Code-First** workflow:

| # | Lab | Topic |
|---|-----|-------|
| 1 | Lab1_ORM | Understanding ORM |
| 2 | Lab2_DbContext | Configuring DbContext |
| 3 | Lab3_Migrations | EF Core Migrations |
| 4 | Lab4_InsertData | Insert Data |
| 5 | Lab5_RetrieveData | Retrieve Data |
| 6 | Lab6_UpdateDelete | Update & Delete Operations |
| 7 | Lab7_LINQQueries | LINQ Queries |
| 8 | Lab8_SchemaChanges | Schema Changes & Migrations |
| 9 | Lab9_DataSeeding | Data Seeding |
| 10 | Lab10_LoadingStrategies | Eager, Lazy & Explicit Loading |
| 11 | Lab11_Relationships | Entity Relationships |
| 12 | Lab12_DTOs | Data Transfer Objects (DTOs) |
| 13 | Lab13_QueryTracking | Query Tracking |
| 14 | Lab14_BulkOperations | Bulk Operations |
| 15 | Lab15_Concurrency | Optimistic Concurrency using RowVersion |

**Core Concepts Covered:**

`ORM` · `Code-First Development` · `DbContext Configuration` · `Entity Configuration` · `CRUD Operations` · `LINQ Queries` · `Migrations` · `Database Updates` · `Data Seeding` · `Eager / Lazy / Explicit Loading` · `One-to-One, One-to-Many, Many-to-Many Relationships` · `DTOs` · `Query Tracking & No-Tracking` · `Bulk Operations` · `Optimistic Concurrency` · `RowVersion`

---

## 🛠️ Technologies Used

| Technology | Version |
|------------|---------|
| C# | 12 |
| .NET | 8 |
| Entity Framework Core | 8.x |
| SQL Server | 2022 |
| Visual Studio | 2022 |
| NUnit | 3.13.3 |
| NUnit3TestAdapter | 4.5.0 |
| Moq | 4.20.x |
| Git | Latest |

---

## ⚡ Getting Started

### Prerequisites

- [.NET 8 SDK](https://dotnet.microsoft.com/download/dotnet/8.0)
- [SQL Server 2022](https://www.microsoft.com/en-us/sql-server/sql-server-downloads) (or LocalDB)
- [Visual Studio 2022](https://visualstudio.microsoft.com/) with the *ASP.NET and web development* workload

### Clone & Run

```bash
git clone https://github.com/<your-username>/Cognizant_DN5_DotNetFSE.git
cd Cognizant_DN5_DotNetFSE
```

Open any lab folder in **Visual Studio 2022** and run directly.

### EF Core Labs Setup

1. Update the connection string in `appsettings.json` to point to your local SQL Server instance.
2. Apply migrations:

```bash
dotnet ef database update
```

---

## 🎯 Learning Outcomes

- ✅ Object-Oriented Programming (OOP)
- ✅ Data Structures & Algorithms
- ✅ SOLID Principles
- ✅ Design Patterns
- ✅ Unit Testing with NUnit
- ✅ Mocking with Moq
- ✅ SQL Server Programming
- ✅ Entity Framework Core
- ✅ LINQ Queries
- ✅ CRUD Operations
- ✅ Database Migrations & Data Seeding
- ✅ Entity Relationships
- ✅ Query Optimization
- ✅ Optimistic Concurrency
- ✅ Git & GitHub Workflow

---

## 📌 Repository Highlights

- 🗂️ Well-organized, week-wise folder structure
- 💻 Hands-on implementation of every lab
- 🗄️ Full SQL Server integration
- ⚙️ Entity Framework Core Code-First approach
- 🧪 Unit testing with NUnit
- 🎭 Mocking with Moq
- 📝 Clean, professional Git commit history

---

## 📄 License

This repository is shared for **educational and portfolio purposes** as part of the Cognizant Digital Nurture program. Feel free to reference it for your own learning.

---

## 👨‍💻 Author

**Utkarsh Raj**  
Cognizant Digital Nurture (DN 5.0) — .NET Full Stack Engineer Trainee

---
