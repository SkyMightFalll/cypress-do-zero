# 🧪 Cypress E2E & API Automation - ServerRest

![Cypress](https://img.shields.io/badge/-cypress-%23E5E5E5?style=for-the-badge&logo=cypress&logoColor=058a5e)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)

> **Status do Projeto:** ✅ Concluído e Rodando em CI/CD
>
> **Último Build:** ![GitHub Actions Workflow Status](https://img.shields.io/github/actions/workflow/status/[SEU_USUARIO]/[NOME_DO_REPO]/ci.yml?style=flat-square&logo=github)

## 📌 Sobre o Projeto

Este projeto é uma **suíte de testes automatizados** robusta desenvolvida para validar a aplicação [ServerRest](https://serverest.dev/). O objetivo foi simular cenários reais de um ambiente corporativo, garantindo a qualidade tanto do Frontend (E2E) quanto do Backend (API).

A arquitetura foi pensada para ser **escalável, manutenível e rápida**, utilizando as melhores práticas de QA Moderno.

### 🎯 Principais Funcionalidades Testadas

| Área | Funcionalidade | Tipo | Cobertura |
| :--- | :--- | :--- | :--- |
| **🛍️ Loja** | Busca, Adição ao Carrinho e Validação de Estoque | E2E | ✅ Completo |
| **👤 Admin** | Cadastro e Gestão de Usuários (CRUD) | E2E | ✅ Completo |
| **📦 Produtos** | Cadastro de Produtos com validação de campos | E2E | ✅ Completo |
| **🔌 API** | Criação dinâmica de usuários (Data Setup) | API | 🚀 Otimizado |

---

## 🏗️ Arquitetura e Tecnologias

O projeto segue o padrão **Page Objects** para organizar os elementos de tela e métodos de interação, facilitando a manutenção.

* **Linguagem:** JavaScript (ES6+)
* **Framework:** Cypress (v13+)
* **Design Pattern:** Page Objects (POM)
* **Relatórios:** Mochawesome & GitHub Actions Logs
* **CI/CD:** GitHub Actions (Execução automática a cada Push)
* **Estratégia de Dados:**
    * Uso de **Factories** (API) para criação de massa de dados antes dos testes de UI.
    * Dados dinâmicos (`Date.now()`) para evitar conflitos de unicidade.

---

## 🚀 Como Rodar o Projeto

### Pré-requisitos
* Node.js instalado (v14 ou superior)
* Git instalado
