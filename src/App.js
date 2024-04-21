import { Route, Routes } from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import DashLayout from "./layouts/DashLayout/DashLayout";
import {
  Home,
  Cities,
  Developers,
  Properties,
  Blogs,
  Projects,
  ProjectDetails,
  ContactUs,
  CreateProperty,
  PropertiesDetails,
  ProjectsList,
  CreateProject,
  ProjectsDetails,
  BlogsList,
  BlogsDetails,
  CreateBlog,
  ClientInfoList,
  ClientInfoDetails,
  DevelopersList,
  CreateDeveloper,
  DevelopersDetails,
  PropertiesList,
  Login,
  ForgotPassword,
  UpdatePassword,
} from "./pages";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/forgotPassword" element={<ForgotPassword />} />
        <Route path="/updatePassword" element={<UpdatePassword />} />

        {/* DASHBOARD */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashLayout />
            </ProtectedRoute>
          }
        >
          <Route
            path="properties"
            element={
              <ProtectedRoute>
                <PropertiesList />
              </ProtectedRoute>
            }
          />
          <Route
            index
            path=""
            element={
              <ProtectedRoute>
                <PropertiesList />
              </ProtectedRoute>
            }
          />
          <Route
            path="properties/create"
            element={
              <ProtectedRoute>
                <CreateProperty />
              </ProtectedRoute>
            }
          />
          <Route
            path="properties/view/:id"
            element={
              <ProtectedRoute>
                <PropertiesDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="projects"
            element={
              <ProtectedRoute>
                <ProjectsList />
              </ProtectedRoute>
            }
          />
          <Route
            path="projects/create"
            element={
              <ProtectedRoute>
                <CreateProject />
              </ProtectedRoute>
            }
          />
          <Route
            path="projects/view/:id"
            element={
              <ProtectedRoute>
                <ProjectsDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="blogs"
            element={
              <ProtectedRoute>
                <BlogsList />
              </ProtectedRoute>
            }
          />
          <Route
            path="blogs/create"
            element={
              <ProtectedRoute>
                <CreateBlog />
              </ProtectedRoute>
            }
          />
          <Route
            path="blogs/view/:id"
            element={
              <ProtectedRoute>
                <BlogsDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="clientInfo"
            element={
              <ProtectedRoute>
                <ClientInfoList />
              </ProtectedRoute>
            }
          />
          <Route
            path="clientInfo/view/:id"
            element={
              <ProtectedRoute>
                <ClientInfoDetails />
              </ProtectedRoute>
            }
          />

          <Route
            path="developers"
            element={
              <ProtectedRoute>
                <DevelopersList />
              </ProtectedRoute>
            }
          />
          <Route
            path="developers/create"
            element={
              <ProtectedRoute>
                <CreateDeveloper />
              </ProtectedRoute>
            }
          />
          <Route
            path="developers/view/:id"
            element={
              <ProtectedRoute>
                <DevelopersDetails />
              </ProtectedRoute>
            }
          />
        </Route>

        {/* MAIN HOME */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/properties" element={<Properties />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/contactUs" element={<ContactUs />} />
        </Route>
      </Routes>

      <ToastContainer
        limit={6}
        autoClose={3000}
        newestOnTop={true}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        position="top-right"
      />
    </div>
  );
}

export default App;
