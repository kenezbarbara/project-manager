import axios from 'axios'
import type { Project } from '../types/project'

const API_BASE_URL = 'http://localhost:3000'

//*Get all projects
export const getAllProjects = async (): Promise<Project[]> => {
  try {
    const result = await axios.get<Project[]>(`${API_BASE_URL}/projects`)
    return result.data
  } catch {
    throw new Error('Failed to fetch projects')
  }
}

//*Add a new project
export const addProject = async (
  project: Omit<Project, 'id'>
): Promise<void> => {
  try {
    await axios.post(`${API_BASE_URL}/projects`, project)
  } catch {
    throw new Error('Failed to add project')
  }
}

//*Get a project by ID
export const getProjectById = async (id: string): Promise<Project> => {
  try {
    const result = await axios.get<Project>(`${API_BASE_URL}/projects/${id}`)
    return result.data
  } catch {
    throw new Error('Failed to fetch project')
  }
}

//*Get all employees
export const getAllEmployees = async (): Promise<string[]> => {
  try {
    const result = await axios.get<string[]>(`${API_BASE_URL}/employees`)
    return result.data
  } catch {
    throw new Error('Failed to fetch employees')
  }
}

//*Get all positions
export const getAllPositions = async (): Promise<string[]> => {
  try {
    const result = await axios.get<string[]>(`${API_BASE_URL}/positions`)
    return result.data
  } catch {
    throw new Error('Failed to fetch positions')
  }
}
