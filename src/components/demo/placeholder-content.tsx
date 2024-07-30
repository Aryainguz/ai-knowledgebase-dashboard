import Link from "next/link";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Plus, FileText, ListFilter, Table, Folder, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from "@/components/ui/card";
import { DataTableDemo } from "../admin-panel/data-table";

export default function PlaceholderContent() {
  return (
    <div className="w-full">
      <Card className="rounded-lg border-none mt-6 ">
        <CardContent className="p-6 w-full">
          <div className="flex  h-full w-full ">
            <div className="flex flex-col relative">
              <div className="flex items-center justify-between space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  Project Files
                </h2>
              </div>
              <Tabs defaultValue="overview" className="space-y-4 p-6">
                <TabsContent value="overview" className="space-y-4">
                  <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    <Card className="min-w-[200px] md:min-w-[240px] lg:min-w-[230px] hover:bg-gray-100 hover:cursor-pointer hover:transition-all ease-in-out">
                      <div className="flex p-3 flex-row items-center justify-between">
                        <div className="bg-black p-2 rounded-lg">
                          <FileText size={20} color="white" />
                        </div>
                        <Plus size={17} className="text-muted-foreground" />
                      </div>
                      <div className="text-sm mx-4 mb-4 font-semibold text-black dark:text-white">
                        New Documents
                      </div>
                    </Card>
                    <Card className="min-w-[200px] md:min-w-[240px] lg:min-w-[230px] hover:bg-gray-100 hover:cursor-pointer hover:transition-all ease-in-out">
                      <div className="flex p-3 flex-row items-center justify-between">
                        <div className="bg-black p-2 rounded-lg">
                          <Table size={20} color="white" />
                        </div>
                        <Plus size={17} className="text-muted-foreground" />
                      </div>
                      <div className="text-sm mx-4 mb-4 font-semibold text-black dark:text-white">
                        New SpreadSheet
                      </div>
                    </Card>
                    <Card className="min-w-[200px] md:min-w-[240px] lg:min-w-[230px] hover:bg-gray-100 hover:cursor-pointer hover:transition-all ease-in-out">
                      <div className="flex p-3 flex-row items-center justify-between">
                        <div className="bg-black p-2 rounded-lg">
                          <Folder size={20} color="white" />
                        </div>
                        <Plus size={17} className="text-muted-foreground" />
                      </div>
                      <div className="text-sm mx-4 mb-4 font-semibold text-black dark:text-white">
                        New Project
                      </div>
                    </Card>
                    <Card className="min-w-[200px] md:min-w-[240px] lg:min-w-[230px] hover:bg-gray-100 hover:cursor-pointer hover:transition-all ease-in-out">
                      <div className="flex p-3 flex-row items-center justify-between">
                        <div className="bg-black p-2 rounded-lg">
                          <User size={20} color="white" />
                        </div>
                        <Plus size={17} className="text-muted-foreground" />
                      </div>
                      <div className="text-sm mx-4 mb-4 font-semibold text-black dark:text-white">
                        New Team
                      </div>
                    </Card>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
        <CardContent className="p-6 w-full">
          <div className="flex  h-full w-full ">
            <div className="flex flex-col relative">
              <div className="flex items-center justify-between space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">
                  Recently Updated
                </h2>
              </div>
              <Tabs defaultValue="overview" className="space-y-4 p-6">
  <TabsContent value="overview" className="space-y-4">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <Card className="p-6 flex items-center justify-center hover:cursor-pointer w-full h-28">
        <div className="p-3">
          <div className="bg-gray-100 dark:bg-white p-3 rounded-2xl">
            <FileText size={27} />
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <CardDescription className="text-sm font-semibold text-black dark:text-white">
            Dashboard Requirement
          </CardDescription>
          <div className="flex gap-2 mt-1">
            <CardDescription className="text-sm">220Kb</CardDescription>
            <CardDescription className="text-sm">docx</CardDescription>
          </div>
        </div>
      </Card>

      <Card className="p-6 flex items-center justify-center hover:cursor-pointer w-full h-28">
        <div className="p-3">
          <div className="bg-gray-100 dark:bg-white p-3 rounded-2xl">
            <FileText size={27} />
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <CardDescription className="text-sm font-semibold text-black dark:text-white">
            Dashboard Requirement
          </CardDescription>
          <div className="flex gap-2 mt-1">
            <CardDescription className="text-sm">220Kb</CardDescription>
            <CardDescription className="text-sm">docx</CardDescription>
          </div>
        </div>
      </Card>

      <Card className="p-6 flex items-center justify-center hover:cursor-pointer w-full h-28">
        <div className="p-3">
          <div className="bg-gray-100 dark:bg-white p-3 rounded-2xl">
            <FileText size={27} />
          </div>
        </div>
        <div className="flex flex-col ml-4">
          <CardDescription className="text-sm font-semibold text-black dark:text-white">
            Dashboard Requirement
          </CardDescription>
          <div className="flex gap-2 mt-1">
            <CardDescription className="text-sm">220Kb</CardDescription>
            <CardDescription className="text-sm">docx</CardDescription>
          </div>
        </div>
      </Card>
    </div>
  </TabsContent>
</Tabs>

            </div>
          </div>
        </CardContent>

        <CardContent className="p-6 ">
          <div className="flex  h-full w-full">
            <div className="flex flex-col relative w-full">
              <div className="flex items-center justify-between space-y-2">
                <h2 className="text-2xl font-bold tracking-tight">All Files</h2>
              </div>

              <Tabs defaultValue="viewall" className="space-y-4 my-5">
                <div className="flex justify-between">
                  <div className="flex-grow">
                    <TabsList>
                      <TabsTrigger value="viewall">View All</TabsTrigger>
                      <TabsTrigger value="documents">Documents</TabsTrigger>
                      <TabsTrigger value="spreadsheet" disabled>
                        Spreadsheets
                      </TabsTrigger>
                      <TabsTrigger value="pdfs" disabled>
                        PDFs
                      </TabsTrigger>
                      <TabsTrigger value="images" disabled>
                        Images
                      </TabsTrigger>
                    </TabsList>
                  </div>
                  <div className="flex w-full max-w-sm items-center space-x-2 ml-auto">
                    <Input type="email" placeholder="Search" />
                    <Button type="submit" className="bg-transparent text-black">
                      <ListFilter size={20} /> Filter
                    </Button>
                  </div>
                </div>

                <TabsContent value="viewall">
                  <DataTableDemo />
                </TabsContent>
                <TabsContent value="documents">
                  <Card>
                    <CardHeader>
                      <CardTitle>Password</CardTitle>
                      <CardDescription>
                        Change your password here. After saving, you willll be
                        logged out.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="space-y-1">
                        <Label htmlFor="current">Current password</Label>
                        <Input id="current" type="password" />
                      </div>
                      <div className="space-y-1">
                        <Label htmlFor="new">New password</Label>
                        <Input id="new" type="password" />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button>Save password</Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
