#! /bin/bash
sudo apt-get update -y

# Basic packages
sudo apt-get install -y \
    git \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg \
    software-properties-common \
    lsb-release \
    dirmngr \
    unzip \
    build-essential

# Add docker ubuntu repositories
sudo mkdir -p /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
echo \
"deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
$(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install docker
sudo apt-get update -y
sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Manage Docker as a non-root user
sudo groupadd -f docker
sudo usermod -aG docker ubuntu

# Install nvm
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
# Start using nvm now
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"  # This loads nvm
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"  # This loads nvm bash_completion
nvm install 18
nvm use 18

# User should run `newgrp docker` to switch to the docker group
newgrp docker 
