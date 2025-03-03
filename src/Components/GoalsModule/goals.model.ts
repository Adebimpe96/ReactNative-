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
  id: number
  title: string
  onDeleteItem: (id: number) => void
  OnEditItem: () => void
}

export const goalCollections = collection(db, 'todos')
