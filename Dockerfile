FROM ruby:3.1.2

# Create SSH directory and add known_hosts file
RUN mkdir -p /root/.ssh && touch /root/.ssh/known_hosts

# Add the SSH key to the agent
COPY id_ed25519 /root/.ssh/id_ed25519
RUN chmod 600 /root/.ssh/id_ed25519 && \
    eval "$(ssh-agent -s)" && \
    ssh-add /root/.ssh/id_ed25519 && \
    ssh-keyscan github.com >> /root/.ssh/known_hosts

WORKDIR /app

# Clone the repository using SSH
RUN git clone git@github.com:securedeveloper/js-xlsx.git

# Copy the Gemfile and Gemfile.lock
COPY Gemfile Gemfile.lock ./

# Install dependencies
RUN bundle install

# Install Node.js
RUN curl -sL https://deb.nodesource.com/setup_18.x | bash - && \
    apt-get update && apt-get install -y nodejs

# Copy the rest of the application
COPY . .

CMD ["rails", "server", "-b", "0.0.0.0"]
