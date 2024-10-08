'use client'

import * as React from 'react'

import { DropdownMenu, DropdownMenuContent,DropdownMenuTrigger } from 'shared/ui/dropdown-menu'
import { Button } from 'shared/ui/button'

import { Moon, Sun } from 'lucide-react'
// import { useTheme } from 'next-themes'

export function ModeToggle() {
	// const { setTheme, themes } = useTheme()

	return (
		<DropdownMenu>
			<DropdownMenuTrigger asChild>
				<Button size={'icon'} variant={'outline'}>
					<Sun className={'h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'} />
					<Moon
						className={'absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100'}
					/>
					<span className={'sr-only'}>Toggle theme</span>
				</Button>
			</DropdownMenuTrigger>
			<DropdownMenuContent align={'end'}>
				{/*{themes.map((theme) => (*/}
				{/*	<DropdownMenuItem key={theme} onClick={() => setTheme(theme)}>*/}
				{/*		{theme}*/}
				{/*	</DropdownMenuItem>*/}
				{/*))}*/}
			</DropdownMenuContent>
		</DropdownMenu>
	)
}
