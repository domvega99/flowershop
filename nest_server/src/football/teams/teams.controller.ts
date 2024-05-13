import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TeamsService } from './teams.service';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Team } from './entities/team.entity';

@Controller('football/teams')
export class TeamsController {
  constructor(private readonly teamsService: TeamsService) {}
  
  @Post()
  async create(@Body() employeeData: Partial<Team>): Promise<Team> {
    return this.teamsService.create(employeeData);
  }

  @Get()
  async findAll(): Promise<Team[]> {
    return this.teamsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Team> {
    return this.teamsService.findById(parseInt(id, 10));
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() employeeData: Partial<Team>,
  ): Promise<Team> {
    return this.teamsService.update(parseInt(id, 10), employeeData);
  }
  
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    await this.teamsService.remove(+id);
  }
}
