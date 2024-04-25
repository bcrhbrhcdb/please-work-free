// db.js
import postgres from 'postgres'

const connectionString = "postgres://postgres.qcgormukkhvvsfopwoky:haqmN7RZfGLVUAEj@aws-0-us-west-1.pooler.supabase.com:5432/postgres"
const sql = postgres(connectionString)

export default sql