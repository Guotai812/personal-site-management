// app/api/addProject/route.js
import { NextResponse } from 'next/server'
import { getDatabase } from '@/lib/mongodb'

export async function POST(req) {
  try {
    // 1. Parse the JSON body
    const { name, description, url, techniques } = await req.json()

    // 2. Get the database
    const db = await getDatabase()

    // 3. Insert into your 'projects' collection
    const result = await db
      .collection('projects')
      .insertOne({
        name,
        description,
        url,
        techniques,
      })

    // 4. Return success with the new document’s ID
    return NextResponse.json(
      { success: true, projectId: result.insertedId },
      { status: 201 }
    )
  } catch (error) {
    console.error('addProject POST error:', error)

    // 5. Error handling
    return NextResponse.json(
      { error: error.message || 'Failed to add new project' },
      { status: 500 }
    )
  }
}