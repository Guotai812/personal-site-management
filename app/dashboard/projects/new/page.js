// SimpleProjectForm.jsx
'use client'
import { useState } from 'react'
import styles from './page.module.css'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SimpleProjectForm() {
  const router = useRouter();
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [url, setUrl] = useState('')
  const [techniques, setTechniques] = useState([''])
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const addTechnique = () => {
    setTechniques([...techniques, ''])
  }

  const removeTechnique = (index) => {
    setTechniques(techniques.filter((_, i) => i !== index))
  }

  const updateTechnique = (value, index) => {
    setTechniques(techniques.map((t, i) => i === index ? value : t))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = {
      name,
      description,
      url,
      techniques: techniques.filter(t => t.trim() !== '')
    }
    try {
      setLoading("loading");
      const res = await fetch("/api/addProject", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(payload),
      })
      if(!res.ok) {
        const err = await res.json();
        setError(err.error || "Failed to add new project");
      }
      setLoading(null);
      router.push("/dashboard/projects");
    } catch(error) {
      setError(error || "Failed to add new project");
    }
  }

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <h2>Project Form</h2>
      <div className={styles.formGroup}>
        <label>Name:</label>
        <input
          className={styles.input}
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>Description:</label>
        <textarea
          className={styles.textarea}
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
        />
      </div>

      <div className={styles.formGroup}>
        <label>URL:</label>
        <input
          className={styles.input}
          type="url"
          value={url}
          onChange={e => setUrl(e.target.value)}
          required
        />
      </div>

      <fieldset className={styles.fieldset}>
        <legend className={styles.legend}>Techniques</legend>
        {techniques.map((tech, idx) => (
          <div key={idx} className={styles.techniqueRow}>
            <input
              className={styles.input}
              type="text"
              placeholder="e.g. React"
              value={tech}
              onChange={e => updateTechnique(e.target.value, idx)}
              required
            />
            <button
              type="button"
              onClick={() => removeTechnique(idx)}
              className={styles.deleteButton}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={addTechnique}
          className={styles.addButton}
        >
          + Add Technique
        </button>
      </fieldset>
      
      <button type="submit" className={styles.submitButton} disabled={loading}>
        {loading ? "Submitting" : "Submit"}
      </button>
      <Link href="/dashboard/projects" className={styles.cancelLink}>
        Cancel
      </Link>
      {error && <p>{error}</p>}
    </form>
  )
}