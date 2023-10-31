import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://suxodusjhnidzojbvjsj.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1eG9kdXNqaG5pZHpvamJ2anNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODY4Mjc5MCwiZXhwIjoyMDE0MjU4NzkwfQ.AVASxHoAFF0liq4sQ3P7gZGxqZOfXsaMsp7ckSxq76k",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InN1eG9kdXNqaG5pZHpvamJ2anNqIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5ODY4Mjc5MCwiZXhwIjoyMDE0MjU4NzkwfQ.AVASxHoAFF0liq4sQ3P7gZGxqZOfXsaMsp7ckSxq76k"
    }
})