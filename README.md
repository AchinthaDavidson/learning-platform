# learning-platform

docker workdirs

client
#WORKDIR /Users/imandialuthge/Desktop/SLIIT/Year 03/Semester 2/DS/Assignment/learning-platform/client
build cmnd - docker build -t client .
PORT - 3000

course backend
WORKDIR /Users/XYWINGS/Documents/LP/learning-platform/backend/course-backend
build cmnd - docker build -t course-backend .
PORT - 8090

enrollment backend
WORKDIR /Users/XYWINGS/Documents/LP/learning-platform/backend/enrolment-backend
build cmnd - docker build -t enrollment-backend .
PORT - 8071

payment backend
WORKDIR /Users/XYWINGS/Documents/LP/learning-platform/backend/payment-backend
build cmnd - docker build -t payment-backend .
PORT - 8070

user backend
WORKDIR /Users/XYWINGS/Documents/LP/learning-platform/backend/user-backend
build cmnd - docker build -t user-backend .
PORT - 8080


