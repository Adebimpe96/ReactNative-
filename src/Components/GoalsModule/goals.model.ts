import { db } from '../../Config/firebase'
import { collection } from 'firebase/firestore'

export interface ICourseGoals {
  id: number
  goals: string
  description?: string
  completed?: boolean
  createdAt?: number
  updatedAt?: number
}

export interface IGoalItem {
  goal: ICourseGoals
  onDeleteItem: (id: number) => void
  OnEditItem: (goal: ICourseGoals) => void
}

export const goalCollections = collection(db, 'todos')
