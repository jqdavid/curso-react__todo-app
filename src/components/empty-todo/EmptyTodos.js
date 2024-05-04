function EmptyTodos({text ='Crea tu primer TODO !'}) {
  return (
    <p className="ont-bold" style={{margin: '0 24px',padding:'1rem 0'}}>{text}</p>
  );
}

export { EmptyTodos };