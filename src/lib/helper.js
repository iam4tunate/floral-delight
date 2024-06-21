import { supabase } from './supabase';

export async function getCustomer(email) {
  const { data, error } = await supabase
    .from('customers')
    .select('*')
    .eq('email', email)
    .single();

  // No error here! We handle the possibility of no guest in the sign in callback
  return data;
}

export async function createCustomer(newCustomer) {
  const { data, error } = await supabase
    .from('customers')
    .insert([newCustomer]);

  if (error) {
    console.error(error);
    throw new Error('User could not be created');
  }
  console.log(data);
  return data;
}

export async function getProducts(category) {
  console.log('cat', category);
  const { data, error } = await supabase
    .from('products')
    .select('*')
    .eq('category', category);
  // .single();
  console.log('data', data);
  if (error) {
    console.error('error', error);
    throw new Error('Unable to fetch products');
  }

  return data;
}

export async function getBanner(category) {
  console.log('cat', category);
  const { data, error } = await supabase
    .from('banners')
    .select('*')
    .eq('category', category)
    .single();
  console.log('data', data);
  if (error) {
    console.error('error', error);
    throw new Error('Unable to fetch banner');
  }

  return data;
}
