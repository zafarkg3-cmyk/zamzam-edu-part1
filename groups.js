import { supabase } from "./supabaseClient";

/**
 * Find a group by its exact name, or create it if this is the first
 * student to register into it.
 *
 * @param {string} name
 */
export async function findOrCreateGroup(name) {
  const trimmed = name.trim();

  const { data: existing, error: findError } = await supabase
    .from("groups")
    .select("id, name")
    .ilike("name", trimmed)
    .maybeSingle();

  if (findError) throw findError;
  if (existing) return existing;

  const { data: created, error: createError } = await supabase
    .from("groups")
    .insert([{ name: trimmed }])
    .select()
    .single();

  if (createError) throw createError;
  return created;
}

/**
 * Look up a group by its exact name — used for the parent/teacher
 * "login" screen. Returns null if no group with that name exists yet.
 *
 * @param {string} name
 */
export async function findGroupByName(name) {
  const { data, error } = await supabase
    .from("groups")
    .select("id, name")
    .ilike("name", name.trim())
    .maybeSingle();

  if (error) throw error;
  return data;
}
