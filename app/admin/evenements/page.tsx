"use client"

import { useState } from "react"
import { Plus, Pencil, Trash2 } from "lucide-react"
import { useAdmin } from "@/components/admin/admin-store"
import { AdminPageHeader } from "@/components/admin/admin-page-header"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
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
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { formatShortDate } from "@/lib/format"
import type { ChurchEvent } from "@/lib/site-data"

type FormState = Omit<ChurchEvent, "id">

const empty: FormState = {
  title: "",
  date: new Date().toISOString().slice(0, 10),
  time: "18:00",
  location: "45 rue Delizy, Pantin",
  category: "Convention",
  description: "",
  image: "/placeholder.svg?height=600&width=800",
}

export default function AdminEventsPage() {
  const { events, addEvent, updateEvent, deleteEvent } = useAdmin()
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>(empty)
  const [toDelete, setToDelete] = useState<string | null>(null)

  const openNew = () => {
    setEditing(null)
    setForm(empty)
    setOpen(true)
  }

  const openEdit = (event: ChurchEvent) => {
    setEditing(event.id)
    const { id, ...rest } = event
    setForm(rest)
    setOpen(true)
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editing) updateEvent(editing, form)
    else addEvent(form)
    setOpen(false)
  }

  const set = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="flex flex-col gap-6">
      <AdminPageHeader
        title="Événements"
        description="Gérez l'agenda et les événements à venir affichés sur le site."
        action={
          <Button onClick={openNew}>
            <Plus className="size-4" />
            Nouvel événement
          </Button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Titre</TableHead>
              <TableHead className="hidden sm:table-cell">Catégorie</TableHead>
              <TableHead className="hidden lg:table-cell">Lieu</TableHead>
              <TableHead className="hidden md:table-cell">Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {events.map((event) => (
              <TableRow key={event.id}>
                <TableCell className="font-medium text-primary">{event.title}</TableCell>
                <TableCell className="hidden sm:table-cell">
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    {event.category}
                  </span>
                </TableCell>
                <TableCell className="hidden lg:table-cell text-muted-foreground">
                  {event.location}
                </TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">
                  {formatShortDate(event.date)} · {event.time}
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(event)} aria-label="Modifier">
                      <Pencil className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setToDelete(event.id)}
                      aria-label="Supprimer"
                    >
                      <Trash2 className="size-4 text-destructive" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>{editing ? "Modifier l'événement" : "Nouvel événement"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Titre</Label>
              <Input id="title" value={form.title} onChange={(e) => set("title", e.target.value)} required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Catégorie</Label>
                <Input id="category" value={form.category} onChange={(e) => set("category", e.target.value)} required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="location">Lieu</Label>
                <Input id="location" value={form.location} onChange={(e) => set("location", e.target.value)} required />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" value={form.date} onChange={(e) => set("date", e.target.value)} required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="time">Heure</Label>
                <Input id="time" type="time" value={form.time} onChange={(e) => set("time", e.target.value)} required />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" rows={3} value={form.description} onChange={(e) => set("description", e.target.value)} required />
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
            <AlertDialogTitle>Supprimer cet événement ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. L'événement sera retiré du site.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (toDelete) deleteEvent(toDelete)
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
