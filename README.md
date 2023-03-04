### Map-O:

#### Process and Knowlege mapping tool for all organizations.

#### Models:


```mermaid
erDiagram
    Process{
        int ID
    capabilityName String
    processName String
    processStages Array 
    processOwner String
    mermaidCode String
    }
```

### List of routes:
#### Backend routes:


### Route Table
| Endpoint | Method | Description |
| -------- | -------- | -------- |
| /maps | GET | brings user to the homepage where they're able to create new process map or sselect one to view 
| /maps/:id | GET | brings user to a specific process map based on their selection
| /maps | POST | creates a new process map |
| /maps/:id | PUT | updates a specific process map based on the ID |
| /maps/:id | DELETE | deletes a process map based on ID | 


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