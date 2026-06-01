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
import type { Sermon } from "@/lib/site-data"

type FormState = Omit<Sermon, "id">

const empty: FormState = {
  title: "",
  speaker: "",
  date: new Date().toISOString().slice(0, 10),
  category: "Prière",
  duration: "",
  youtubeUrl: "",
  description: "",
}

export default function AdminSermonsPage() {
  const { sermons, addSermon, updateSermon, deleteSermon } = useAdmin()
  const [open, setOpen] = useState(false)
  const [editing, setEditing] = useState<string | null>(null)
  const [form, setForm] = useState<FormState>(empty)
  const [toDelete, setToDelete] = useState<string | null>(null)

  const openNew = () => {
    setEditing(null)
    setForm(empty)
    setOpen(true)
  }

  const openEdit = (sermon: Sermon) => {
    setEditing(sermon.id)
    const { id, ...rest } = sermon
    setForm(rest)
    setOpen(true)
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    if (editing) updateSermon(editing, form)
    else addSermon(form)
    setOpen(false)
  }

  const set = (key: keyof FormState, value: string) =>
    setForm((prev) => ({ ...prev, [key]: value }))

  return (
    <div className="flex flex-col gap-6">
      <AdminPageHeader
        title="Sermons"
        description="Ajoutez, modifiez ou supprimez les prédications affichées sur le site."
        action={
          <Button onClick={openNew}>
            <Plus className="size-4" />
            Nouveau sermon
          </Button>
        }
      />

      <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Titre</TableHead>
              <TableHead className="hidden md:table-cell">Orateur</TableHead>
              <TableHead className="hidden sm:table-cell">Catégorie</TableHead>
              <TableHead className="hidden lg:table-cell">Date</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {sermons.map((sermon) => (
              <TableRow key={sermon.id}>
                <TableCell className="font-medium text-primary">{sermon.title}</TableCell>
                <TableCell className="hidden md:table-cell text-muted-foreground">
                  {sermon.speaker}
                </TableCell>
                <TableCell className="hidden sm:table-cell">
                  <span className="rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                    {sermon.category}
                  </span>
                </TableCell>
                <TableCell className="hidden lg:table-cell text-muted-foreground">
                  {formatShortDate(sermon.date)}
                </TableCell>
                <TableCell>
                  <div className="flex justify-end gap-1">
                    <Button variant="ghost" size="icon" onClick={() => openEdit(sermon)} aria-label="Modifier">
                      <Pencil className="size-4" />
                    </Button>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => setToDelete(sermon.id)}
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
            <DialogTitle>{editing ? "Modifier le sermon" : "Nouveau sermon"}</DialogTitle>
          </DialogHeader>
          <form onSubmit={submit} className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <Label htmlFor="title">Titre</Label>
              <Input id="title" value={form.title} onChange={(e) => set("title", e.target.value)} required />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="speaker">Orateur</Label>
                <Input id="speaker" value={form.speaker} onChange={(e) => set("speaker", e.target.value)} required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="category">Catégorie</Label>
                <Input id="category" value={form.category} onChange={(e) => set("category", e.target.value)} required />
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="date">Date</Label>
                <Input id="date" type="date" value={form.date} onChange={(e) => set("date", e.target.value)} required />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="duration">Durée</Label>
                <Input id="duration" placeholder="48 min" value={form.duration} onChange={(e) => set("duration", e.target.value)} required />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <Label htmlFor="youtubeUrl">Lien vidéo</Label>
              <Input id="youtubeUrl" type="url" value={form.youtubeUrl} onChange={(e) => set("youtubeUrl", e.target.value)} />
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
            <AlertDialogTitle>Supprimer ce sermon ?</AlertDialogTitle>
            <AlertDialogDescription>
              Cette action est irréversible. Le sermon sera retiré du site.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Annuler</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                if (toDelete) deleteSermon(toDelete)
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
