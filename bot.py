import os
from dotenv import load_dotenv
load_dotenv()

import discord
from discord.ext import commands

intents = discord.Intents.default()
intents.message_content = True
bot = commands.Bot(command_prefix='>', intents=intents)

@bot.event
async def on_ready():
    print('{0.user} online'.format(bot))

@bot.command(name="pfp")
async def _pfp(ctx, user: discord.User = None):
    if user is None:
        user = ctx.author
    try:
        avatar_url = user.avatar.url
        await ctx.send(f"**{user.name}**'s profile picture: {avatar_url}")
    except AttributeError:
        await ctx.send(f"**{user.name}** does not have a profile picture.")
    except:
        await ctx.send(f"User not found.")

@bot.command(name='idpfp')
async def _idpfp(ctx, user_id: int):
    try:
        user = await bot.fetch_user(user_id)
        await ctx.send(f"{user.name}'s profile picture: {user.avatar.url}")
    except discord.NotFound:
        await ctx.send("User not found.")
    except discord.HTTPException:
        await ctx.send("There was an error fetching the user's profile.")

def main():
    try:
        bot.run(os.getenv("TOKEN"))
    except discord.HTTPException as e:
        if e.status == 429:
            print("The Discord servers denied the connection for making too many requests")
        else:
            raise e

if __name__ == "__main__":
    main()