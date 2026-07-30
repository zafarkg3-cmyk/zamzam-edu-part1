import { supabase } from "./supabaseClient";
import { findOrCreateGroup } from "./groups";

/**
 * Register a new student: resolves (or creates) their group by name, then
 * creates a student profile linked to it.
 *
 * @param {{name: string, surname: string, groupName: string}} input
 */
export async function registerStudent({ name, surname, groupName }) {
  const group = await findOrCreateGroup(groupName);

  const { data, error } = await supabase
    .from("students")
    .insert([{ name: name.trim(), surname: surname.trim(), group_id: group.id }])
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
