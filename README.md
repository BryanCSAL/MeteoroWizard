# **MeteoroWizard🧙‍♂️**

[![Licença MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)  
[![Versão](https://img.shields.io/badge/version-1.0.0-brightgreen.svg)](https://semver.org/)  
[![Status: Desenvolvimento Completo](https://img.shields.io/badge/status-desenvolvimento%20completo-brightgreen.svg)]()

---

Aplicação web de previsão do tempo desenvolvida com **HTML, CSS e JavaScript**, utilizando as APIs do **Open-Meteo** para consultar informações meteorológicas de uma cidade.

O usuário informa o nome de uma cidade e a aplicação utiliza a API de Geocoding para obter suas coordenadas (latitude e longitude). Em seguida, essas coordenadas são utilizadas na Forecast API para obter os dados meteorológicos.

## 📑 Índice

- [🚀 Funcionalidades](#-funcionalidades)
- [🛠️ Tecnologias utilizadas](#️-tecnologias-utilizadas)
- [🔌 Como funciona](#-como-funciona)
  - [1. Geocoding API](#1-geocoding-api)
  - [2. Forecast API](#2-forecast-api)
- [📊 Dados utilizados](#-dados-utilizados)
  - [Condições atuais](#condições-atuais)
  - [Previsão](#previsão)
- [📁 Estrutura do projeto](#-estrutura-do-projeto)
- [💻 Como executar](#-como-executar)
  - [1. Clone o repositório](#1-clone-o-repositório)
  - [2. Acesse a pasta](#2-acesse-a-pasta)
  - [3. Execute o projeto](#3-execute-o-projeto)
- [🔑 API Key](#-api-key)
- [🧠 Conceitos praticados](#-conceitos-praticados)
- [🔄 Fluxo da aplicação](#-fluxo-da-aplicação)
- [🌐 Documentação](#-documentação)
- [👨‍💻 Autor](#-autor)
- [📄 Licença](#-licença)

## 🚀 Funcionalidades

- 🔎 Pesquisa de cidades pelo nome
- 📍 Conversão do nome da cidade em latitude e longitude
- 🌡️ Temperatura atual
- 💧 Umidade do ar
- 💨 Velocidade do vento
- 🌡️ Sensação térmica
- 🌧️ Probabilidade de chuva
- 📅 Previsão para os próximos dias
- ⌨️ Pesquisa utilizando a tecla Enter

## 🛠️ Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Fetch API
- Open-Meteo Geocoding API
- Open-Meteo Forecast API

## 🔌 Como funciona

A aplicação realiza duas consultas principais.

### 1. Geocoding API

O usuário informa uma cidade, por exemplo:

```text
Praia Grande
```

O nome é enviado para a Geocoding API:

```text
Nome da cidade
      ↓
Geocoding API
      ↓
Latitude + Longitude
```

### 2. Forecast API

As coordenadas obtidas são utilizadas para consultar o clima:

```text
Latitude + Longitude
        ↓
Forecast API
        ↓
Dados meteorológicos
        ↓
Interface do MeteoroWizard
```

## 📊 Dados utilizados

### Condições atuais

| Informação       | Campo utilizado        |
|------------------|------------------------|
| Temperatura      | `temperature_2m`       |
| Umidade          | `relative_humidity_2m` |
| Vento            | `wind_speed_10m`       |
| Sensação térmica | `apparent_temperature` |

### Previsão

| Informação             | Campo utilizado                 |
|------------------------|---------------------------------|
| Temperatura máxima     | `temperature_2m_max`            |
| Probabilidade de chuva | `precipitation_probability_max` |

## 📁 Estrutura do projeto

```text
MeteoroWizard/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## 💻 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/BryanCSAL/MeteoroWizard.git
```

### 2. Acesse a pasta

```bash
cd MeteoroWizard
```

### 3. Execute o projeto

Abra o arquivo `index.html` no navegador.

Também é possível utilizar o **Live Server** no Visual Studio Code para executar o projeto localmente.

## 🔑 API Key

O projeto utiliza a Open-Meteo e, para o uso previsto nesta aplicação, não é necessário configurar uma API Key.

## 🧠 Conceitos praticados

Este projeto foi desenvolvido como prática de desenvolvimento web e consumo de APIs, trabalhando conceitos como:

- Manipulação do DOM
- Eventos JavaScript
- `fetch()`
- `async/await`
- Consumo de APIs REST
- JSON
- Query Parameters
- Template Literals
- Arrays e objetos
- `try/catch`
- Manipulação de dados recebidos de APIs

## 🔄 Fluxo da aplicação

```text
┌─────────────────────┐
│ Usuário informa     │
│ uma cidade          │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Geocoding API       │
│                     │
│ Nome → Coordenadas  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Latitude            │
│ Longitude           │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ Forecast API        │
│                     │
│ Dados meteorológicos│
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│ MeteoroWizard       │
│                     │
│ Exibe os dados      │
│ na interface        │
└─────────────────────┘
```

## 🌐 Documentação

- [Open-Meteo](https://open-meteo.com/)
- [Forecast API](https://open-meteo.com/en/docs)
- [Geocoding API](https://open-meteo.com/en/docs/geocoding-api)

## 👨‍💻 Autor

Desenvolvido por **Bryan Lopes**.

Tecnologias: `HTML` · `CSS` · `JavaScript` · `REST API` · `Open-Meteo`

## 📄 Licença

Projeto desenvolvido para fins de estudo e portfólio.
