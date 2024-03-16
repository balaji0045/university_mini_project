#FROM openjdk:17-jdk-alpine
#ARG JAR_FILE=target/*.jar
#COPY target/demo-0.0.1.jar app.jar
#ENTRYPOINT ["java","-jar","/app.jar"]

FROM openjdk:17-jdk-alpine

# ARG for specifying JAR file during build
ARG JAR_FILE=target/demo-0.0.1-SNAPSHOT.jar

# Copy the JAR file from the target directory to the container
#COPY ${JAR_FILE} app.jar
COPY target/demo-0.0.1.SNAPSHOT.jar app.jar


# Define the entry point for the container
ENTRYPOINT ["java", "-jar", "/app.jar"]
