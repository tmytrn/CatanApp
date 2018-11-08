'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      return queryInterface.bulkInsert('ports',[{
          resource_in_type: 'LUMBER',
          resource_out_type: 'ANY',
          resources_in_required: 2,
          resources_out_required: 1
        }
        ,{
          resource_in_type: 'BRICK',
          resource_out_type: 'ANY',
          resources_in_required: 2,
          resources_out_required: 1
        }
        ,{
          resource_in_type: 'WOOL',
          resource_out_type: 'ANY',
          resources_in_required: 2,
          resources_out_required: 1
        }
        ,{
          resource_in_type: 'GRAIN',
          resource_out_type: 'ANY',
          resources_in_required: 2,
          resources_out_required: 1
        },{
          resource_in_type: 'ORE',
          resource_out_type: 'ANY',
          resources_in_required: 2,
          resources_out_required: 1
        },
        {
          resource_in_type: 'ANY',
          resource_out_type: 'ANY',
          resources_in_required: 3,
          resources_out_required: 1
        }
      ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('ports',null, {});
  }
};
