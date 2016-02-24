## application-portal

[![Code Climate](https://codeclimate.com/github/TechRetreat/application-portal/badges/gpa.svg)](https://codeclimate.com/github/TechRetreat/application-portal)
[![Circle CI](https://circleci.com/gh/TechRetreat/application-portal.svg?style=svg)](https://circleci.com/gh/TechRetreat/application-portal)

The application portal for Tech Retreat 2016. 

Ensure you have ruby (>= 2.2.2) and rails installed.

We're using Postgres for our DB. You'll need to download and run it from [here](http://postgresapp.com/). 

Install stuff:

```
$ bundle install
$ bundle exec rake db:create
$ bundle exec rake db:migrate
```

Start the server:
```
$ rails s
```

If you want a faster experience, use [zeus](https://github.com/burke/zeus)
