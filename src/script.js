import { createClient } from '@supabase/supabase-js'

// 1. Conexion al .env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const db = createClient(supabaseUrl, supabaseKey)

// 2. Referencias al DOM
const inputTxt = document.querySelector('#txt')
const btnEnviar = document.querySelector('button')

// 3. Funcion enviar
async function enviar() {
    const { error } = await db.from('mensajes').insert([{ texto: inputTxt.value }])
    inputTxt.value = '';
}

// 4. Evento al boton 
btnEnviar.addEventListener('click', enviar)


