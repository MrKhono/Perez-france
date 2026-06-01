"use client"

import { useState } from "react"
import Image from "next/image"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { useAdmin } from "@/components/admin/admin-store"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"
import type { TeamMember } from "@/lib/site-data"

type FormState = Omit<TeamMember, "id">

const empty: FormState = {
  name: "",
  role: "",
  image: "/placeholder.svg?height=600&width=800",
}

export default function AdminTeamPage() {
  const { team, addMember, updateMember, deleteMember } = useAdmin()
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>(empty)
  const [toDelete, setToDelete] = useState<string | null>(null)

  const openNew = () => {
    setEditing(null)
    setForm(empty)
    setOpen(true)
  }

  const openEdit = (member: TeamMember) => {
    setEditing(member.id)
    const { id, ...rest } = member
    setForm(rest)
    setOpen(true)
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editing) updateMember(editing, form)
    else addMember(form)
    setOpen(false)
  }

  const set = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="flex flex-col gap-6">
      <AdminPageHeader
        title="Équipe"
        description="Gérez les membres de l'équipe pastorale et les responsables affichés sur le site."
        action={
          <Button onClick={openNew}>
            <Plus className="size-4" />
            Nouveau membre
          </Button>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {team.map((member) => (
          <div
            key={member.id}
            className="flex items-center gap-4 rounded-2xl border border-border bg-card p-4 shadow-sm"
          >
            <div className="relative size-16 shrink-0 overflow-hidden rounded-full bg-secondary">
              <Image src={member.image || "/placeholder.svg"} alt={member.name} fill className="object-cover" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate font-medium text-primary">{member.name}</p>
              <p className="truncate text-sm text-muted-foreground">{member.role}</p>
            </div>
            <div className="flex flex-col gap-1">
              <Button variant="ghost" size="icon" onClick={() => openEdit(member)} aria-label="Modifier">
                <Pencil className="size-4" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setToDelete(member.id)}
                aria-label="Supprimer"
              >
                <Trash2 className="size-4 text-destructive" />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Modifier le membre" : "Nouveau membre"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="name">Nom</Label>
              <Input id="name" value={form.name} onChange={(e) => set("name", e.target.value)} required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="role">Fonction</Label>
              <Input id="role" value={form.role} onChange={(e) => set("role", e.target.value)} required />
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="image">Lien de la photo</Label>
              <Input id="image" value={form.image} onChange={(e) => set("image", e.target.value)} />
            </div>
            <DialogFooter>
              <Button type="button" variant="outline" onClick={() => setOpen(false)}>
                Annuler
              </Button>
              <Button type="submit">{editing ? "Enregistrer" : "Ajouter"}</Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      <AlertDialog open={toDelete !== null} onOpenChange={(o) => !o && setToDelete(null)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Supprimer ce membre ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. Le membre sera retiré du site.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (toDelete) deleteMember(toDelete)
                setToDelete(null)
              }}
            >
              Supprimer
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  )
}
