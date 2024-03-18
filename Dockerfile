#FROM openjdk:17-jdk-alpine
#ARG JAR_FILE=target/*.jar
#COPY target/demo-0.0.1.jar app.jar
#ENTRYPOINT ["java","-jar","/app.jar"]

#FROM openjdk:17-jdk-alpine

# ARG for specifying JAR file during build
#ARG JAR_FILE=target/demo-0.0.1-SNAPSHOT.jar
#ARG JAR_FILE=target/*.jar
# Copy the JAR file from the target directory to the container
#COPY ${JAR_FILE} app.jar



# Define the entry point for the container
#ENTRYPOINT ["java", "-jar", "/app.jar"]
#FROM openjdk:17-jdk-alpine
# Use a Java base image from Docker Hub
FROM docker.io/openjdk:17-windowsservercore

# Set the volume for temporary files (if needed)
VOLUME /tmp

# Set the argument for the JAR file
ARG JAR_FILE

# Copy the JAR file into the container
COPY ${JAR_FILE} app.jar

# Specify the entry point for running the application
ENTRYPOINT ["java", "-jar", "/app.jar"]



