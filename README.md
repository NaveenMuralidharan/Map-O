### Map-O:

#### Process and Knowlege mapping tool for all organizations.

#### Models:


```mermaid
erDiagram
    Process{
        id              int
        processName     String
        orgUnit         String
        processOwner    String
        contactDetails  String
        steps: [
                   {
                      order: int, 
                      stakeholder: String,
                      action: String,
                      pass_to: String,
                      purpose: String,
                      channel: String, 
                      frequency:String,
                      tool: String  
                   }
                ]
        }
```

### List of routes:
#### Backend routes:


### Route Table
| Endpoint | Method | Description |
| -------- | -------- | -------- |
| /process | GET | brings user to the homepage where they're able to create new process map or select one to view 
| /process/:id | GET | brings user to a specific process map based on their selection
| /process | POST | creates a new process map |
| /process/:id | PATCH | updates a specific process map based on the ID |
| /process/:id | DELETE | deletes a process map based on ID | 


#### List for frontend routes

```
    App --> Header
    App --> Outlet
    Outlet -- "/" --> Index 
    Outlet -- "/:id" --> Show
    Outlet -- "/update/:id" --> updateAction
    Outlet -- "/delete/:id" --> deleteAction
    Outlet -- "/create" --> createAction
```

#### Component Architecture:

<img src="https://i.imgur.com/tHkYmZ8.png">

#### Webdesign Mockup:

#### Index Page:

<img src="https://i.imgur.com/Bkv3eEQ.png">

#### Create Page

<img src="https://i.imgur.com/BG7Zyow.png">

#### Show Page

<img src="https://i.imgur.com/T7EwcK0.png">

#### Edit Page

<img src="https://i.imgur.com/2RIx47t.png">


#### Technologies Used:
Backend:
MongoDB
Express
Node JS

Frontend:
React 
Javascript
Mermaid JS