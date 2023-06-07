FROM openjdk:17-jdk-alpine

ENV APP_HOME=/app
WORKDIR $APP_HOME

COPY target/myapp.jar $APP_HOME/myapp.jar

CMD ["java", "-jar", "myapp.jar"]