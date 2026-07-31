import { supabase } from "./supabaseClient";
import { findOrCreateGroup } from "./groups";

/**
 * Register a student: resolves (or creates) their group by name, then
 * reuses an existing student profile if the same name+surname already
 * exists in that group — otherwise creates a new one. This is what lets a
 * student close the app, come back later, and re-enter the exact same
 * name/surname/group to continue from where they left off instead of
 * starting a brand new (progress-less) profile every time.
 *
 * @param {{name: string, surname: string, groupName: string}} input
 */
export async function registerStudent({ name, surname, groupName }) {
  const group = await findOrCreateGroup(groupName);
  const trimmedName = name.trim();
  const trimmedSurname = surname.trim();

  const { data: existing, error: findError } = await supabase
    .from("students")
    .select("id, name, surname")
    .eq("group_id", group.id)
    .ilike("name", trimmedName)
    .ilike("surname", trimmedSurname)
    .maybeSingle();

  if (findError) throw findError;
  if (existing) return { ...existing, groupName: group.name };

  const { data, error } = await supabase
    .from("students")
    .insert([{ name: trimmedName, surname: trimmedSurname, group_id: group.id }])
    .select()
    .single();

  if (error) throw error;
  return { ...data, groupName: group.name };
}

/**
 * Fetch every student in a group, for the parent/teacher dashboard.
 *
 * @param {string} groupId
 */
export async function fetchStudentsInGroup(groupId) {
  const { data, error } = await supabase
    .from("students")
    .select("id, name, surname, created_at")
    .eq("group_id", groupId)
    .order("created_at", { ascending: true });

  if (error) throw error;
  return data;
}
