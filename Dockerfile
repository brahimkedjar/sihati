FROM ruby:3.1.2

RUN apt-get update -qq && apt-get install -y nodejs postgresql-client curl

# Add SSH key and set permissions
RUN mkdir -p /root/.ssh && chmod 0700 /root/.ssh && ssh-keyscan github.com >> /root/.ssh/known_hosts
COPY id_rsa /root/.ssh/id_rsa
RUN chmod 600 /root/.ssh/id_rsa
RUN ssh-keyscan github.com >> /root/.ssh/known_hosts

# Set the GIT_SSH_COMMAND environment variable to use the SSH key
ENV GIT_SSH_COMMAND="ssh -i /root/.ssh/id_rsa -o UserKnownHostsFile=/root/.ssh/known_hosts"

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list && apt-get update && apt-get install -y yarn

RUN mkdir /app
WORKDIR /app
COPY Gemfile Gemfile.lock ./
RUN gem install bundler
RUN bundle install --jobs 20 --retry 5

COPY . ./


EXPOSE 3000
CMD ["bundle", "exec", "rails", "server", "-b", "0.0.0.0"]
