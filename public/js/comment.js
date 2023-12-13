const newFormHandler = async (event) => {
    event.preventDefault();
  
    const blog_id = document.querySelector('#blog_id').value.trim();
    // const needed_funding = document.querySelector('#project-funding').value.trim();
    const comment = document.querySelector('#comment-desc').value.trim();
  
    if (blog_id && comment) {
      const response = await fetch(`/api/comments`, {
        method: 'POST',
        body: JSON.stringify({ blog_id, comment }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(response)
      if (response.ok) {
        document.location.replace('/profile');
      } else {
        alert('Failed to create project');
      }
    }
    
  };
  
  
  document
    .querySelector('#comment')
    .addEventListener('submit', newFormHandler);

  