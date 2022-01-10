## Overview

### URL
https://profile.numpon.com

### Tech Stack
F/E: React, Redux, React-boostrap, React-i18next \
Infrastructure: AWS, ALB, ECS, Docker \
CI/CD: AWSCodebuild (buildspec.yml)

### Infrastructure
![Infrastructure Diagram](infrastructure-diagram.png)
Route53 > ALB > ECS (Docker) > EC2

## Available Scripts

Run Development Env:

### `npm start`

Run Production Env:

### `npm run start:prod`

