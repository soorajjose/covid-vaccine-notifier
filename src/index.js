const express = require("express");
const app = require("./app");
const PORT = process.env.PORT || 5000;

express().listen(PORT, () => app());
