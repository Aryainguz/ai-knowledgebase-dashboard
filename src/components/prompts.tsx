"use client"
import {
  Bird,
  CornerDownLeft,
  Mic,
  Paperclip,
  Rabbit,
  Turtle,
  ThumbsUp,
  ThumbsDown,
  Copy,
  RefreshCcw,
  Bot,
  Edit,
} from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { TooltipProvider } from "@radix-ui/react-tooltip"

export default function Prompts() {
  return (
    <TooltipProvider>
      <main className="grid dark:bg-black mt-6 rounded-lg bg-white shadow-lg flex-1 gap-4 sm:p-2 lg:p-5 md:p-5 md:grid-cols-2 lg:grid-cols-3">
        <div
          className="relative hidden flex-col items-start gap-8 md:flex"
          x-chunk="dashboard-03-chunk-0"
        >
          <form className="grid w-full items-start gap-6">
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 text-2xl font-bold tracking-tight px-1 ">
                AI Generation
              </legend>
              <div className="grid gap-3">
                <Label htmlFor="model">Model</Label>
                <Select>
                  <SelectTrigger
                    id="model"
                    className="items-start [&_[data-description]]:hidden"
                  >
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="genesis">
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <Rabbit className="size-5" />
                        <div className="grid gap-0.5">
                          <p>
                            Neural{" "}
                            <span className="font-medium text-foreground">
                              Genesis
                            </span>
                          </p>
                          <p className="text-xs" data-description>
                            Our fastest model for general use cases.
                          </p>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="explorer">
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <Bird className="size-5" />
                        <div className="grid gap-0.5">
                          <p>
                            Neural{" "}
                            <span className="font-medium text-foreground">
                              Explorer
                            </span>
                          </p>
                          <p className="text-xs" data-description>
                            Performance and speed for efficiency.
                          </p>
                        </div>
                      </div>
                    </SelectItem>
                    <SelectItem value="quantum">
                      <div className="flex items-start gap-3 text-muted-foreground">
                        <Turtle className="size-5" />
                        <div className="grid gap-0.5">
                          <p>
                            Neural{" "}
                            <span className="font-medium text-foreground">
                              Quantum
                            </span>
                          </p>
                          <p className="text-xs" data-description>
                            The most powerful model for complex computations.
                          </p>
                        </div>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="temperature">Temperature</Label>
                <Input id="temperature" type="number" placeholder="0.4" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-3">
                  <Label htmlFor="top-p">Top P</Label>
                  <Input id="top-p" type="number" placeholder="0.7" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="top-k">Top K</Label>
                  <Input id="top-k" type="number" placeholder="0.0" />
                </div>
              </div>
            </fieldset>
            <fieldset className="grid gap-6 rounded-lg border p-4">
              <legend className="-ml-1 px-1 text-sm font-medium">
                Messages
              </legend>
              <div className="grid gap-3">
                <Label htmlFor="role">Role</Label>
                <Select defaultValue="system">
                  <SelectTrigger>
                    <SelectValue placeholder="Select a role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="system">System</SelectItem>
                    <SelectItem value="Bot">Bot</SelectItem>
                    <SelectItem value="assistant">Assistant</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="content">Content</Label>
                <Textarea
                  id="content"
                  placeholder="You are a..."
                  className="min-h-[9.5rem]"
                />
              </div>
            </fieldset>
          </form>
        </div>
        <div className="relative flex h-[640px] flex-col rounded-xl bg-muted/50 md:p-4 lg:p-4 sm:p-0  lg:col-span-2">
          <Badge variant="outline" className="absolute hidden md:block right-3 top-[-10px]">
            Output
          </Badge>

          <div className="flex-1 h-[400px] overflow-y-auto p-2 space-y-4">

            <div className="flex flex-col  items-start w-full relative">
              <div className="w-full rounded-lg p-4 bg-gray-200 text-sm">
                <p className="text-gray-900">User: Can you provide more details?</p>
              </div>
              <div className="absolute top-2 right-2 flex space-x-2">
                <Button className="dark:bg-black" variant="ghost" size="icon">
                  <Edit className="size-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-end w-full relative">
              <div className="w-full flex flex-col gap-1 dark:bg-black rounded-lg p-4 bg-white text-sm space-y-2">
                <div className="flex gap-3 items-center space-x-2">
                  <div>
                    <Bot size={20} />
                  </div>
                  <div className="flex-1 text-black dark:text-white">
                    AI: It involves Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eum. several stages including planning, coding, testing, and maintenance.
                  </div>
                </div>
                <div className="flex justify-end space-x-1 mt-2">
                  <button className="p-1 rounded  hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Copy size={14} />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <RefreshCcw size={14} />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <ThumbsUp size={14} />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <ThumbsDown size={14} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col  items-start w-full relative">
              <div className="w-full rounded-lg p-4 bg-gray-200 text-sm">
                <p className="text-gray-900">User: Can you provide more details?</p>
              </div>
              <div className="absolute top-2 right-2 flex space-x-2">
                <Button className="dark:bg-black" variant="ghost" size="icon">
                  <Edit className="size-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-end w-full relative">
              <div className="w-full flex flex-col gap-1 dark:bg-black rounded-lg p-4 bg-white text-sm space-y-2">
                <div className="flex gap-3 items-center space-x-2">
                  <div>
                    <Bot size={20} />
                  </div>
                  <div className="flex-1 text-black dark:text-white">
                    AI: It involves Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eum. several stages including planning, coding,Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga voluptas neque libero! testing, and maintenance.
                  </div>
                </div>
                <div className="flex justify-end space-x-1 mt-2">
                  <button className="p-1 rounded  hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Copy size={14} />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <RefreshCcw size={14} />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <ThumbsUp size={14} />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <ThumbsDown size={14} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col  items-start w-full relative">
              <div className="w-full rounded-lg p-4 bg-gray-200 text-sm">
                <p className="text-gray-900">User: Can you provide more details?</p>
              </div>
              <div className="absolute top-2 right-2 flex space-x-2">
                <Button className="dark:bg-black" variant="ghost" size="icon">
                  <Edit className="size-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-end w-full relative">
              <div className="w-full flex flex-col gap-1 dark:bg-black rounded-lg p-4 bg-white text-sm space-y-2">
                <div className="flex gap-3 items-center space-x-2">
                  <div>
                    <Bot size={20} />
                  </div>
                  <div className="flex-1 text-black dark:text-white">
                    AI: It involves Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, eum. several stages including planning, coding, testing, and maintenance.
                  </div>
                </div>
                <div className="flex justify-end space-x-1 mt-2">
                  <button className="p-1 rounded  hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Copy size={14} />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <RefreshCcw size={14} />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <ThumbsUp size={14} />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <ThumbsDown size={14} />
                  </button>
                </div>
              </div>
            </div>
            <div className="flex flex-col  items-start w-full relative">
              <div className="w-full rounded-lg p-4 bg-gray-200 text-sm">
                <p className="text-gray-900">User: Can you provide more details?</p>
              </div>
              <div className="absolute top-2 right-2 flex space-x-2">
                <Button className="dark:bg-black" variant="ghost" size="icon">
                  <Edit className="size-4" />
                </Button>
              </div>
            </div>
            <div className="flex flex-col items-end w-full relative">
              <div className="w-full flex flex-col gap-1 dark:bg-black rounded-lg p-4 bg-white text-sm space-y-2">
                <div className="flex gap-3 items-center space-x-2">
                  <div>
                    <Bot size={20} />
                  </div>
                  <div className="flex-1 text-black dark:text-white">
                    AI: It involves Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio possimus recusandae laborum facilis doloribus, eveniet nisi dolore aperiam dolorem consequatur quidem quam non. ipsum dolor sit amet consectetur adipisicing elit. Molestias, eum. several stages including planning, coding, testing, and maintenance.
                  </div>
                </div>
                <div className="flex justify-end space-x-1 mt-2">
                  <button className="p-1 rounded  hover:bg-gray-100 dark:hover:bg-gray-800">
                    <Copy size={14} />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <RefreshCcw size={14} />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <ThumbsUp size={14} />
                  </button>
                  <button className="p-1 rounded hover:bg-gray-100 dark:hover:bg-gray-800 ">
                    <ThumbsDown size={14} />
                  </button>
                </div>
              </div>
            </div>


          </div>
          <form
            className="sticky bottom-0 bg-white dark:bg-black sm:p-[0px] lg:p-4 md:p-4 rounded-t-lg border-t"
            x-chunk="dashboard-03-chunk-1"
          >
            <Label htmlFor="message" className="sr-only">
              Message
            </Label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
            />
            <div className="flex items-center p-3 pt-0">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Paperclip className="size-4" />
                    <span className="sr-only">Attach file</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Attach File</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button variant="ghost" size="icon">
                    <Mic className="size-4" />
                    <span className="sr-only">Use Microphone</span>
                  </Button>
                </TooltipTrigger>
                <TooltipContent side="top">Use Microphone</TooltipContent>
              </Tooltip>
              <Button type="submit" size="sm" className="ml-auto gap-1.5">
                Send Message
                <CornerDownLeft className="size-3.5" />
              </Button>
            </div>
          </form>
        </div>
      </main>
    </TooltipProvider>
  )
}