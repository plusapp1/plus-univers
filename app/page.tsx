export default function Home() {
  return (
    <main style={{
      backgroundColor: '#000',
      color: '#fff',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'monospace',
    }}>
      <h1 style={{ fontSize: '2rem' }}>Vous attendez + ?</h1>
      <a
        href="/iris"
        style={{
          marginTop: '2rem',
          padding: '1rem 2rem',
          backgroundColor: '#fff',
          color: '#000',
          textDecoration: 'none',
          borderRadius: '6px',
          fontWeight: 'bold',
        }}
      >
        Entrer dans +iris
      </a>
    </main>
  )
}
Replace default page with +start
